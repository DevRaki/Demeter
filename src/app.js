import express from 'express';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express();

//middlewares
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);

export default app;
