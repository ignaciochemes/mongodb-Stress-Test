const User = require('../models/User.model');
const chalk = require('chalk');
const log = console.log;

const getApi = async (req, res) => {
    const { limit = 5, from = 0 } = req.query;
    try {
        const getUsers = await User.find().skip(Number(from)).limit(Number(limit));
        log(chalk.green('Req to getApi controller pass!'))
        res.status(200).json({
            msg: "Your Users",
            getUsers
        });
    } catch (e) {
        log(chalk.red('Error in getApi controller!'))
        res.status(200).json({
            msg: "Error in getApi controller!"
        });
    }
}

const postApi = async (req, res) => {
    const { name, email, password, status, role } = req.body;
    log(req.body)
    const postUsers = new User({ name, email, password, status, role });
    try {
        await postUsers.save();
        log(chalk.green('Req to postApi controller pass!'));
        res.status(200).json({
            msg: "Post user pass!",
        });
    } catch (e) {
        log(chalk.red('Error in getApi controller!'))
        res.status(200).json({
            msg: "Error in postApi controller!"
        });
    }
}

module.exports = {
    getApi,
    postApi
}