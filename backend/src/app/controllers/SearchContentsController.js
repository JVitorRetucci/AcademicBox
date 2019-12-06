import { Op } from 'sequelize';
import Content from '../models/Content';

class SearchContentsController {
  async store(req, res) {
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

export default new SearchContentsController();
