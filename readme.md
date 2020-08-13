# github にリポジトリを作る際の挙動の違い

gitignore や readme を作るか、作らないかで、
リポジトリを作った後の、画面の表示が違う

clone 時の動きが違う。

- ファイルがある場合
  イニシャルコミットが行われる。
- ファイルがない場合
  clone の方法画面が表示される

# branch を切る

git checkout -b create-package-json
git push -u origin HEAD  // ローカルで選択中のbranchと同名のgithub上のbranchにpushする。
git checkout - // master に変わる
git merge - // branch の内容を master に反映
git push origin HEAD // github の master も更新する
その後、ローカルで、master にマージして、master を push している。

# package.json を作る

npm init -y

# package の最新版を調べる

npm info typescript
npm info ts-node
npm info ts-node-dev

# 開発環境だけで使うので、--save-dev をつける

npm install typescript@3.7.5 --save-dev
npm install ts-node@8.6.2 --save-dev
npm install ts-node-dev@1.0.0-pre.44 --save-dev

# tsc: js にコンパイルするコマンド

npx tsc src/install-typescript.ts
node src/install-typescript.js

# ts-node コンパイルと実行を同時にやってくれる（tsc は不要になる）

npx ts-node src/install-typescript.ts
ts-node src/install-typescript.ts

# ts-node-dev: usage

ts-node-dev --respawn src/install-typescript.ts

- よく使うコマンドは、package.json の script に登録すると以下のように実行できる。

npm run dev src/install-typescript.ts


# tsconfig.jsonファイルの作成
tscコマンドで自動生成できる
npx tsc --init

# ts-nodeのバージョンを変更する
npm info ts-node versions
npm uninstall ts-node --save-dev
npm install ts-node@8.5.4 --save-dev
