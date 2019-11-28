import * as Yup from 'yup';
import { Op } from 'sequelize';
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

    user.usuario_xp += 50;

    await user.update({
      usuario_xp: user.usuario_xp,
    });
    console.log(user.usuario_xp)

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

  async index(req, res) {
    const hasSubjectFilter = req.body.material_materia_id;
    const hasCategoryFilter = req.body.material_categoria;

    if (hasSubjectFilter) {
      const contents = await Content.findAll({
        where: {
          material_titulo: {
            [Op.like]: `%${req.body.titulo_pesquisa}%`,
          },
          material_materia_id: req.body.material_materia_id,
        },
      });

      return res.json(contents);
    }

    if (hasCategoryFilter) {
      const contents = await Content.findAll({
        where: {
          material_titulo: {
            [Op.like]: `%${req.body.titulo_pesquisa}%`,
          },
          material_categoria: req.body.material_categoria,
        },
      });

      return res.json(contents);
    }

    if (hasSubjectFilter && hasCategoryFilter) {
      const contents = await Content.findAll({
        where: {
          material_titulo: {
            [Op.like]: `%${req.body.titulo_pesquisa}%`,
          },
          material_materia_id: req.body.material_materia_id,
          material_categoria: req.body.material_categoria,
        },
      });

      return res.json(contents);
    }

    const contents = await Content.findAll({
      where: {
        material_titulo: { [Op.like]: `%${req.body.titulo_pesquisa}%` },
      },
    });

    console.log(contents);

    return res.json(contents);
  }
}

export default new ContentController();
