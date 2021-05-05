const express = require('express');
const { dbConnection } = require('../database/db.config');

class ServerExpress {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;     
        this.dbConnection();
        this.app.use(express.json());
        this.usuariosPath = '/';
        this.routes();
        this.listen();
    }
    
    async dbConnection() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/index'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server UP on port ${this.port}`)
        })
    }
}

module.exports = ServerExpress;