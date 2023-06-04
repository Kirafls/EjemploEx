const axios = require('axios')
const modelNasa = {
 getData: async () => {
 return await axios.get('https://api.nasa.gov/planetary/apod?api_key=u9rFofMchFehyhue4adUNZKBXJrhqaOUUIGBpN9b')
 .then(data => data )
 .catch(err => {console.log(err); return err })
 }
}

module.exports=modelNasa;