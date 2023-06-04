const express = require("express"); // Importar express
const router = express.Router();
const ctrlDatos = require('../control/controlador');
const controlNasa=require('../control/cnasa');
const controlSimpson = require("../control/csimpson");
router.get('/api', ctrlDatos.findDatos);
router.get('/nasa',controlNasa.findNasa);
router.get('/simpson',controlSimpson.findSimpson);

module.exports=router;