import "./config/env.js";
import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

console.log(`@ DB_HOST: ${process.env.DB_HOST}`);

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(5100, () => console.log('Server running at port 5100'));