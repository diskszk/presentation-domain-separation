// プレゼンテーション・ドメイン未分離した時のプレゼンテーション
// ドメイン処理で取得したデータを返すAPI

import express, { Request, Response } from "express";
import { domain } from "../domain/domain";
import { Product } from "../types";
const app = express();

app.get("/products", (req: Request, res: Response) => {
  const repo = domain("./products.json");
  const products: Product[] = repo.findAll();
  res.json(products);
});
app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const repo = domain("./products.json");

  const product = repo.findById(id);

  if (!product) {
    return res.json("404 Error");
  }
  res.json(product);
});

// server起動
app.listen(5000, () => {
  console.log("listening on http://localhost:5000/products");
});
