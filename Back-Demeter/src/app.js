import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express();

app.use(morgan('dev'));
//middlewares
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);

export default app;
