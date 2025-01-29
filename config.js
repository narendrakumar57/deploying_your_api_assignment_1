
require('dotenv').config();


const config = {
  apiKey: process.env.API_KEY,                   
  serverSecret: process.env.SERVER_SECRET,      
  isKalvian: process.env.IS_KALVIAN === 'true', 
};

console.log(config);



module.exports = config;
