const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('DB online');

    } catch (err) {
        console.log(err);
        throw new Error('DB is not connected!')
    }
}

module.exports = {
    dbConnection
}