const { Router } = require('express');
const { getApi,
        postApi } = require('../controllers/index');

const api = Router();

api.get('/', getApi);
api.post('/', postApi);

module.exports = api;