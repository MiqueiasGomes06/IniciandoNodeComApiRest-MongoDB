// chamando nossa biblioteca do mongoose
const mongoose = require("../databse")

// apontando onde vamos criar e usar o nosso banco de dados e informando a forma que ele vai se conectar que e usando o mongoClient
mongoose.connect("mongodb://localhost/noderest", { useMongoClient: true })

mongoose.Promise = global.Promise

module.exports = mongoose
