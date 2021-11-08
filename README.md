## プレセンテーション・ドメイン分離(の一歩目)

### 概要
CLIとWebで、各々がドメイン処理を持つことなく、一つのドメイン処理を両方から用いる事で、プレゼンテーションとドメインを分離する試み

### 機能
jsonファイルからデータを読み込み一覧表示、あるいは該当する1件を表示するアプリケーション

### 各ファイル詳細
/presentationディレクトリ
- プレセンテーション層


/presentation/cli.ts
- 独自ドメインに依存した、未分離のcliスクリプトファイル
- `npx ts-node presentation/cli.ts` で起動  
  - 引数に0個以上のproductsのidを持つ  
  - 引数なしの場合は全件表示する

/presentation/web.ts
- 独自ドメインに依存した、未分離のWebAPI
- `npx ts-node presentation/web.ts` で起動  
  - ブラウザでは http://localhost:5000/products にアクセスする事で全件返す事を確認できる
  - ブラウザでは http://localhost:5000/products/{id} にアクセスする事で該当する1件を返す事を確認できる

/presentation/separatedCLI.ts
- /domain/domain.tsに依存している
`npx ts-node presentation/separatedCli.ts` で起動 
- 機能はcli.tsと同じ

/presentation/separatedWeb.ts
- /domain/domain.tsに依存している
`npx ts-node presentation/separatedWeb.ts` で起動 
- 機能はweb.tsと同じ 

/domain/domain.ts
- domain層
- cli / web の書き方に依存せずに、ドメイン処理だけを行う

TODO
テストを書く