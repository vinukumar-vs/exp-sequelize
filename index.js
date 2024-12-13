const database = require('./config/database');

// Takes highest preference for the .env.production env variables
// It is like overriding the .env variables with .env.production
// Eventhough if we don't define some variables(default) in .env.prodction, it will take it from .env file(if defined)
// merge .env with .env.production by overriding
const dotenv = require('dotenv').config({path: ['.env.production', '.env']});

const sequelize = database.connect(dotenv);

