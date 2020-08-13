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
その後、ローカルで、masterにマージして、masterをpushしている。



# package.jsonを作る
npm init -y

# packageの最新版を調べる
npm info typescript

# 開発環境だけで使うので、--save-devをつける
npm install typescript@3.7.5 --save-dev

# npxコマンドとは
npx tsc src/install-typescript.ts
node src/install-typescript.js



