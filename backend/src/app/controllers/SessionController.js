import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import File from '../models/File';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      usuario_email: Yup.string()
        .email()
        .required(),
      senha: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { usuario_email, senha } = req.body;

    const user = await User.findOne({
      where: { usuario_email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'caminho', 'url'],
        },
      ],
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(senha))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, usuario_nome, avatar } = user;

    return res.json({
      user: {
        id,
        usuario_nome,
        usuario_email,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
