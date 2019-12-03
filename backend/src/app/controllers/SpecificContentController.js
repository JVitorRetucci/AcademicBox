import Content from '../models/Content';
import Comment from '../models/Comment';

class SpecificContentController {
  async index(req, res) {
    const content = await Content.findByPk(req.params.id);

    const comment = await Comment.findAll({
      where: { comentario_conteudo_id: req.params.id },
    });

    if (!content) {
      return res.status(400).json({ error: 'Content does not exists' });
    }

    return res.json({ content, comment });
  }
}

export default new SpecificContentController();
