// JSONファイルを読み込んで返すAPI
// プレゼンテーション・ドメイン未分離 (Web)

import express, { Request, Response } from "express";
import fs from "fs";
import { Product } from "../types";
const app = express();

const data = JSON.parse(fs.readFileSync("./products.json", "utf-8")) || [];

const products: Product[] = data.products;

app.get("/products", (req: Request, res: Response) => {
  res.json(products);
});
app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const product = products.find((product) => product.productId === id);

  if (!product) {
    return res.json("404 Error");
  }
  res.json(product);
});

// server起動
app.listen(5000, () => {
  console.log("listening on http://localhost:5000/products");
});
