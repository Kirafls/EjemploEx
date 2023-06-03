const express = require("express"); // Importar express
const router = express.Router();
const ctrlDatos = require('../controlador');
router.get('/api', ctrlDatos.findDatos);
module.exports=router;