const { Sequelize } = require("sequelize");

// Initialize Sequelize instance
const database = {
    sequelize: null,
    config: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT
    },
    init: () => {
        console.log("DB Config:", database.config);
        const config = database.config;
        if (!database.sequelize) {
            database.sequelize = new Sequelize(database.config.database, database.config.username, database.config.password, {
                host: database.config.host,
                port: database.config.port,
                dialect: database.config.dialect,
                logging: false, // Disable SQL query logging in production
              });
        }
        return database.sequelize;
    },
    connect: async () => {
        if (!database.sequelize) {
            database.init();
        }
        
        try {
            await database.sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return database.sequelize;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}
database.init();
module.exports = database;