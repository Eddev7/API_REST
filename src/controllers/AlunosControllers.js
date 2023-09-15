import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const novoaluno = await Aluno.create(req.body);
      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = novoaluno;
      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
