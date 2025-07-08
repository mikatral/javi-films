const Filme = require("../models/Filme");

// GET /filmes
exports.getFilmes = async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
};

// POST /filmes
exports.createFilme = async (req, res) => {
  const novoFilme = new Filme(req.body);
  await novoFilme.save();
  res.status(201).json(novoFilme);
};

// PUT /filmes/:id
exports.updateFilme = async (req, res) => {
  const filmeAtualizado = await Filme.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(filmeAtualizado);
};

// DELETE /filmes/:id
exports.deleteFilme = async (req, res) => {
  await Filme.findByIdAndDelete(req.params.id);
  res.json({ mensagem: "Filme removido com sucesso!" });
};
