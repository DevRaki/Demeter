import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('demeter', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  }
);