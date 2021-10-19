// プレゼンテーション・ドメイン未分離した時のプレゼンテーション
// ドメイン処理で取得したデータを返すAPI

import express, { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";
import { Product } from "./types";
const app = express();

app.get("/products", (req: Request, res: Response) => {
  const repo = ProductRepository("./products.json");
  const products: Product[] = repo.findAll();
  res.json(products);
});
app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const repo = ProductRepository("./products.json");

  const product = repo.findById(id);
  res.json(product);
});

// server起動
app.listen(5000, () => {
  console.log("listening on http://localhost:5000/products");
});
