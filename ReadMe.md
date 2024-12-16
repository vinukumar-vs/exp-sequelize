
## Sequelize-cli Migration & Seed steps

### Step 1
Before we start creating the migration of Seed scripts we have to run the below script in the folder where we are keeping all the project migration and see scripts.  
example:  ./database  [Folder name]  

```cmd
cd database
npx sequelize-cli init
```

*reference:*
[Sequelize-CLI scripts](https://sequelize.org/docs/v6/other-topics/migrations/#project-bootstrapping)
[Sequelize-CLI Github](https://github.com/sequelize/cli)

### Step 2
Create the `migration` script before we start migration process. Use the below command to get `migration` template
```cmd
npx sequelize-cli migration:generate --name create-item-table
```

### Step 3 
Update the sample with action model data to create the table  

Sample: [Migration create-item-table.js](migrations/20241216084253-create-item-table.js)

### Step 4 
After completig the step 3 with actual model/table is updated, run the below command to start the `migration` process. This will create the models/tables that are updated int he migration script.
```cmd
npx sequelize-cli db:migrate
```

### Step 5
Reapeat the similar steps what we did for `migration` but now it is for `seed`. Create the sample `seed` template by running the below script.
```cmd
npx sequelize-cli seed:generate --name demo-item
```

sample: [seed demo-Item.js](./database/seeders/20241216084816-demo-Item.js)

### Step 6
Run the `seed` command to insert the sample data into the tables.

```cmd
npm sequelize-cli db:seed:all 
```



