import User from '../models/User';

class UserController {
  async store(req, res) {
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

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
