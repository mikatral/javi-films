const mongoose = require("mongoose");

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: String,
  status: {
    type: String,
    enum: ["Assistido", "Para assistir"],
    default: "Para assistir",
  },
  nota: Number,
  comentario: String,
  imagemUrl: String,
});

module.exports = mongoose.model("Filme", FilmeSchema);
