require('dotenv').config(); // Load environment variables
const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');
const database = require('../config/database');

// Sync models
(async () => {
  // Initialize Sequelize instance
  const sequelize = await database.connect();

  // Dynamically load models
  const modelsDir = path.resolve(__dirname, '../database/models');
  const models = {};
  fs.readdirSync(modelsDir)
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
      const model = require(path.join(modelsDir, file))(sequelize, Sequelize.DataTypes);
      models[model.name] = model;
    });

  try {
    // Sync models
    await sequelize.sync({ alter: false }); // Use `force: true` if needed for development
    console.log('Models synchronized successfully.');

    // Suggest to run the migration scrip to update the models changes
    console.log("\n============ Next Steps ============");
    console.log("To trigger the migration(if needed), execute \n"+ 
      "`npm run migrate-db` \n\n"
    )

    console.log("To feed sample data, execute \n"+
      "`npm run seed-db`"
    )
    console.log("============ END ============\n");
  } catch (error) {
    console.error('Error syncing models:', error);
  } finally {
     // Close the Sequelize connection
     if (database.sequelize) {
      await database.sequelize.close();
      console.log('Database connection closed.');
    }
  }
})();
