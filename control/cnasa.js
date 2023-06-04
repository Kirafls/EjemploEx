const modelNasa = require('../modelo/mnasa');
const controlNasa = {
 findNasa: async (req, res) => {
 res.setHeader('Accsses-Control-Allow-Origin','*');   
 const data = await modelNasa.getData();
 //console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 }
}
module.exports=controlNasa;

