const modelCoctel = require('../modelo/mcoctel');
const controlCoctel = {
 findCoctel: async (req, res) => {
 res.setHeader('Accsses-Control-Allow-Origin','*');   
 const data = await modelCoctel.getData();
 //console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 }
}
module.exports=controlCoctel;

