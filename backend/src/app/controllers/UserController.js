import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      usuario_nome: Yup.string().required(),
      usuario_email: Yup.string()
        .email()
        .required(),
      senha: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({
      where: { usuario_email: req.body.usuario_email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, usuario_nome, usuario_email, usuario_xp } = await User.create(
      req.body
    );

    return res.json({
      id,
      usuario_nome,
      usuario_email,
      usuario_xp,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      usuario_name: Yup.string(),
      usuario_email: Yup.string().email(),
      senha_antiga: Yup.string().min(6),
      senha: Yup.string()
        .min(6)
        .when('senha_antiga', (senha_antiga, field) =>
          senha_antiga ? field.required() : field
        ),
      confirmar_senha: Yup.string().when('senha', (senha, field) =>
        senha ? field.required().oneOf([Yup.ref('senha')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { usuario_email, senha_antiga } = req.body;

    const user = await User.findByPk(req.userId);

    if (usuario_email !== user.usuario_email) {
      const userExists = await User.findOne({
        where: { usuario_email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (senha_antiga && !(await user.checkPassword(senha_antiga))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, usuario_nome } = await user.update(req.body);

    return res.json({ id, usuario_nome, usuario_email });
  }

  async delete(req, res) {
    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, usuario_adm: true },
    });

    if (!checkIsAdmin) {
      return res.status(401).json({ error: 'Only admins can do this' });
    }

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    await user.destroy();

    return res.json({ deleted: 'User deleted' });
  }
}

export default new UserController();
