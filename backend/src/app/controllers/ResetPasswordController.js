import Mail from '../../lib/Mail';
import mailConfig from '../../config/mail';
import User from '../models/User';

class ResetPasswordController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { usuario_email: req.body.mail_address },
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const { senha } = await userExists.update({
      senha: Math.random().toString(36),
    });

    await Mail.sendMail({
      from: mailConfig.default.from,
      to: req.body.mail_address,
      subject: 'Nova sugestão de conteudo',
      text: `Sua nova senha para aplicação é: ${senha}`,
    });

    return res.json({ senha });
  }
}

export default new ResetPasswordController();
