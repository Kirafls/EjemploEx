const axios = require('axios')
const modelSimpson = {
 getData: async () => {
 return await axios.get('https://apisimpsons.fly.dev/api/personajes?limit=20&page=2')
 .then(data => data )
 .catch(err => {console.log(err); return err })
 }
}

module.exports=modelSimpson;