import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, usuario_adm: true },
    });

    if (!checkIsAdmin) {
      return res
        .status(401)
        .json({ error: 'Only admins can create this type of account' });
    }

    const schema = Yup.object().shape({
      usuario_nome: Yup.string().required(),
      usuario_email: Yup.string()
        .email()
        .required(),
      senha: Yup.string()
        .required()
        .min(6),
      usuario_adm: Yup.boolean().required(),
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

    const {
      id,
      usuario_nome,
      usuario_email,
      usuario_adm,
      usuario_xp,
    } = await User.create(req.body);

    return res.json({
      id,
      usuario_nome,
      usuario_email,
      usuario_adm,
      usuario_xp,
    });
  }
}

export default new UserController();
