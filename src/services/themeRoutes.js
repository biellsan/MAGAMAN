const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Pasta para armazenar os arquivos

// Definindo o endpoint para upload de temas
router.post('/themes/upload', upload.single('theme'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  // Aqui você pode adicionar lógica para processar o tema
  res.send('Theme uploaded successfully.');
});

// Definindo o endpoint para aplicar o tema
router.post('/themes/apply', (req, res) => {
  // Lógica para aplicar o tema
  res.send('Theme applied successfully.');
});

module.exports = router;
