const axios = require('axios')
const modelCoctel = {
 getData: async () => {
 return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
 .then(data => data )
 .catch(err => {console.log(err); return err })
 }
}

module.exports=modelCoctel;