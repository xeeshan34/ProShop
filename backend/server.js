import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

config();
connectDB();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_ENV} mode on port ${PORT}`)
);
