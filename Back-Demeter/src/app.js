import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import roleRoutes from './routes/role.routes.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import recipeRoutes from './routes/recipe.routes.js'
import { recipe } from './models/recipe.model.js';

const app = express();

app.use(morgan('dev'));
//middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/Demeter", roleRoutes);
app.use("/Demeter", userRoutes);
app.use("/Demeter", productRoutes);
app.use("/Demeter", recipeRoutes);

export default app;
