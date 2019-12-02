import Content from '../models/Content';

class SpecificContentController {
    async index(req, res) {
        const content = await Content.findByPk(req.params.id);

        if (!content) {
          return res.status(400).json({ error: 'Content does not exists' });
        }

        return res.json(content);
    }
}

export default new SpecificContentController();