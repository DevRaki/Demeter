import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'demeter',
  'root',
  'Elefante1.',
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);