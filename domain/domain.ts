// プレゼンテーション・ドメイン未分離した時のドメイン
// Web/CLIの機能に依存しない

import fs, { PathOrFileDescriptor } from "fs";
import { Product } from "../types";

export function domain(path: PathOrFileDescriptor) {
  const data = JSON.parse(fs.readFileSync(path, "utf-8"));
  const products: Product[] = data.products;

  function findAll() {
    return products;
  }

  function findById(id: string) {
    const product = products.find(({ productId }) => productId === id);
    return product;
  }
  return {
    findAll,
    findById,
  };
}
