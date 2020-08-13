# github にリポジトリを作る際の挙動の違い

gitignoreやreadmeを作るか、作らないかで、
リポジトリを作った後の、画面の表示が違う

clone時の動きが違う。

- ファイルがある場合
イニシャルコミットが行われる。
- ファイルがない場合
cloneの方法画面が表示される


# branchを切る
git checkout -b create-package-json
git push -u origin HEAD
git checkout - // masterに変わる
git merge - // branchの内容をmasterに反映
git push origin HEAD // github のmasterも更新する
その後、ローカルで、masterにマージして、masterをpushしている。


# package.jsonを作る
npm init -y

# packageの最新版を調べる
npm info typescript
npm info ts-node

# 開発環境だけで使うので、--save-devをつける
npm install typescript@3.7.5 --save-dev
npm install ts-node@8.6.2 --save-dev

# tsc: jsにコンパイルするコマンド
npx tsc src/install-typescript.ts
node src/install-typescript.js

# ts-node コンパイルと実行を同時にやってくれる（tscは不要になる）
npx ts-node src/install-typescript.ts
ts-node src/install-typescript.ts



