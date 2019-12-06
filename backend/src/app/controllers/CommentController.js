import * as Yup from 'yup';
import Comment from '../models/Comment';

class CommentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      comentario_texto: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      comentario_texto,
      comentario_usuario_id,
      comentario_conteudo_id,
    } = await Comment.create({
      comentario_texto: req.body.comentario_texto,
      comentario_usuario_id: req.userId,
      comentario_conteudo_id: req.params.id,
    });

    return res.json({
      id,
      comentario_texto,
      comentario_usuario_id,
      comentario_conteudo_id,
    });
  }
}

export default new CommentController();
