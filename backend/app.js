const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const filmeRoutes = require("./routes/filmeRoutes");

const app = express();
const PORT = 3000;

// Conexão com MongoDB
mongoose
  .connect("mongodb://localhost:27017/filmesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", filmeRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
