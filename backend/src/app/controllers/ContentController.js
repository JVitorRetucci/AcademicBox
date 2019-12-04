import * as Yup from 'yup';
import Content from '../models/Content';
import User from '../models/User';

class ContentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      material_titulo: Yup.string().required(),
      material_descricao: Yup.string().required(),
      material_categoria: Yup.string().required(),
      material_materia_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      material_titulo,
      material_descricao,
      material_link,
      material_categoria,
      material_imagem_id,
      material_usuario_id,
      material_materia_id,
    } = await Content.create({
      material_titulo: req.body.material_titulo,
      material_descricao: req.body.material_descricao,
      material_link: req.body.material_link,
      material_categoria: req.body.material_categoria,
      material_imagem_id: req.body.material_imagem_id,
      material_usuario_id: req.userId,
      material_materia_id: req.body.material_materia_id,
    });

    const user = await User.findByPk(req.userId);

    user.usuario_xp += 250;

    await user.update({
      usuario_xp: user.usuario_xp
    });

    return res.json({
      id,
      material_titulo,
      material_descricao,
      material_link,
      material_categoria,
      material_imagem_id,
      material_usuario_id,
      material_materia_id,
    });
  }

  async update(req, res) {
    const avaliacoes = await Content.findByPk(req.params.id);

    avaliacoes.material_avaliacao += req.body.material_avaliacao;

    const user = await User.findbyPk(avaliacoes.userId)

    if(req.body.material_avaliacao == 1){
      user.usuario_xp += 50
    }
    await user.update({
      usuario_xp: user.usuario_xp
    });
    
    const { material_avaliacao } = await avaliacoes.update({
      material_avaliacao: avaliacoes.material_avaliacao,
    });

    return res.json({ material_avaliacao });
  }

  async delete(req, res) {
    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, usuario_adm: true },
    });

    if (!checkIsAdmin) {
      return res.status(401).json({ error: 'Only admins can do this' });
    }

    const content = await Content.findByPk(req.params.id);

    if (!content) {
      return res.status(400).json({ error: 'Content does not exists' });
    }

    await content.destroy();

    return res.json({ deleted: 'Content deleted' });
  }
}

export default new ContentController();
