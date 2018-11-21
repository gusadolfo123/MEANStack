// BD MongoDB
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/meanCrud'

// se conecta MONGO
mongoose.connect(URI).then(db => console.log('DB is Connect')).catch(err => console.log(err));

// para que esta instancia pueda se exportada en otro archivo
module.exports = mongoose;