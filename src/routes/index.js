const express = require('express');
const mainRouter = express.Router();

const authRouter = require('./authRouter');
const tourismRouter = require('./tourismRouter');
const welcomeRouter = require("./welcome");

const {checkLogin} = require('../helpers/checkUser')

mainRouter.use('/auth', authRouter);
mainRouter.use('/tourism', checkLogin, tourismRouter);
mainRouter.use("/", welcomeRouter);


module.exports = mainRouter;