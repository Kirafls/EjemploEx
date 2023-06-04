const modelSimpson = require('../modelo/msimpson');
const controlSimpson = {
 findSimpson: async (req, res) => {
    res.setHeader('Accsses-Control-Allow-Origin','*');  
 const data = await modelSimpson.getData();
 //console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 }
}
module.exports=controlSimpson;



