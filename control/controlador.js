const modelDatos = require('../modelo/modelo');
const controlDatos = {
 findDatos: async (req, res) => {
 const data = await modelDatos.getData();
 //console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 }
}
module.exports=controlDatos;

