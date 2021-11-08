// JSONファイルを読み込んで出力する
// プレゼンテーション・ドメイン未分離 (CLI)

import fs from "fs";
import { argv } from "process";
import { Product } from "../types";

const data = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
const products: Product[] = data.products;

function main() {
  if (argv.length === 2) {
    // 引数なしの場合product配列を返す
    console.log(products);
  } else if (argv.length > 2) {
    // 引数のIDの商品を返す
    for (let i = 2; i < argv.length; i++) {
      const id = argv[i];
      const product = products.find(({ productId }) => productId === id);
      if (product) {
        console.log(product);
      } else {
        console.log(`id: ${id}の製品は存在しません`);
      }
    }
  }
}

main();
