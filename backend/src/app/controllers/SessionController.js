import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { usuario_email, senha } = req.body;

    const user = await User.findOne({ where: { usuario_email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(senha))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, usuario_nome } = user;

    return res.json({
      user: {
        id,
        usuario_nome,
        usuario_email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
