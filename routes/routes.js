const express = require("express"); // Importar express
const router = express.Router();
const ctrlDatos = require('../control/controlador');
const controlNasa=require('../control/cnasa');
const controlSimpson = require("../control/csimpson");
const controlCoctel = require("../control/ccoctel");
router.get('/api', ctrlDatos.findDatos);
router.get('/nasa',controlNasa.findNasa);
router.get('/simpson',controlSimpson.findSimpson);
router.get('/coctel',controlCoctel.findCoctel);

module.exports=router;