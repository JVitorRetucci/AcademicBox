import * as Yup from 'yup';
import Subject from '../models/Subject';
import User from '../models/User';

class SubjectController {
  async store(req, res) {
    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, usuario_adm: true },
    });

    if (!checkIsAdmin) {
      return res
        .status(401)
        .json({ error: 'Only admins can create new subjects' });
    }

    const schema = Yup.object().shape({
      materia_nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const subjectExists = await Subject.findOne({
      where: { materia_nome: req.body.materia_nome },
    });

    if (subjectExists) {
      return res.status(400).json({ error: 'Subject already exists' });
    }

    const { id, materia_nome } = await Subject.create(req.body);

    return res.json({
      id,
      materia_nome,
    });
  }
}

export default new SubjectController();
