const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log(`Nuevo mensaje para Juan Diego Tinoco de: ${nombre} (${email})`);
  console.log(`Contenido: ${mensaje}`);

  res.status(200).json({
    status: "success",
    message: `Hola Juan Diego, hemos recibido el mensaje de ${nombre} correctamente.`
  });
});

app.use('/api', router);

module.exports.handler = serverless(app);