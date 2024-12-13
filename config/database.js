const { Sequelize } = require("sequelize");

// export const DbConfig = {
//     DB_HOST: String,
//     DB_PORT: String,
//     DB_USERNAME: String,
//     DB_PASSWORD: String,
//     DB_NAME: String,
//     DB_DIALECT: String,
// }

// Initialize Sequelize instance
const database = {
    connect: async (dotenv) => {
        // Load environment variables
        const {
            DB_HOST,
            DB_PORT,
            DB_USERNAME,
            DB_PASSWORD,
            DB_NAME,
            DB_DIALECT,
        } = process.env;
      
        const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
            host: DB_HOST,
            port: DB_PORT,
            dialect: DB_DIALECT,
            logging: false, // Disable SQL query logging in production
          });
    
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return sequelize;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}


  module.exports = database;