import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: nome, filename: caminho } = req.file;

    const file = await File.create({
      nome,
      caminho,
    });

    return res.json({ file });
  }
}

export default new FileController();
