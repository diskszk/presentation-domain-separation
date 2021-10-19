// プレゼンテーション・ドメイン未分離した時のプレゼンテーション
// ドメイン処理で取得したデータを表示する

import { argv } from "process";
import { ProductRepository } from "./ProductRepository";
import { Product } from "./types";

function main() {
  if (argv.length === 2) {
    // 引数なしの場合product配列を返す
    const repo = ProductRepository("./products.json");
    const products: Product[] = repo.findAll();

    console.log(products);
  } else if (argv.length > 2) {
    // 引数のIDの商品を返す
    for (let i = 2; i < argv.length; i++) {
      const id = argv[i];
      const repo = ProductRepository("./products.json");
      const product = repo.findById(id);

      if (product) {
        console.log(product);
      } else {
        console.log(`id: ${id}の製品は存在しません`);
      }
    }
  }
}

main();
