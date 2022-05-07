
const mongoose = require('mongoose');

class Mongo {

    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        mongoose.connect(`mongodb://localhost:27017/mvc`)
        // jTp5kt3MPhlhgC7b

        mongoose.connection.once('open', () => {
            console.log("MongoDB is connected");
        })
        mongoose.connection.on('error', () => {
            console.log("Error occured in mongoDB connection");
        })
    }
}

module.exports = Mongo;








