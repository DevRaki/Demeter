import app from './app.js';
import { sequelize } from './db/dataBase.js';

import './models/user.model.js'
import './models/role.model.js'
import './models/permissions.model.js'
import './models/role_permissions.model.js'

async function main() {
    try{
        await sequelize.sync()
        app.listen(4000);
        console.log('Server on port ', 4000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();