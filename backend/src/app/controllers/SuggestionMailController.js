import Mail from '../../lib/Mail';

class SuggestionMailController {
  async store(req, res) {
    await Mail.sendMail({
      from: req.body.mail_address,
      to: `AcademicBox <sugestoes@academicbox.com>`,
      subject: 'Nova sugestão de conteudo',
      text: req.body.mail_text,
    });

    return res.json({ ok: true });
  }
}

export default new SuggestionMailController();
