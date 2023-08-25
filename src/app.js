import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import roleRoutes from './routes/role.routes.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import recipeRoutes from './routes/recipe.routes.js'
import saleRoutes from './routes/sale.routes.js'
import detailSaleRoutes from './routes/detail_sale.routes.js'
import restauranRoutes from './routes/restauran.routes.js'
import waiterRoutes from './routes/waiter.routes.js'
import { recipe } from './models/recipe.model.js';

const app = express();

app.use(morgan('dev'));
//middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/", roleRoutes);
app.use("/", userRoutes);
app.use("/", productRoutes);
app.use("/", recipeRoutes);
app.use("/", saleRoutes);
app.use("/", detailSaleRoutes)
app.use("/", restauranRoutes)
app.use("/", waiterRoutes)
export default app;
