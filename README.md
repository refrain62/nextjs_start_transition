
# React の新しい概念「トランジション」で React アプリの応答性を改善する
https://numb86-tech.hatenablog.com/entry/2022/01/02/225402 の 写経

## 環境整備
```
mkdir nextjs_start_transition
cd nextjs_start_transition

npm install next@latest react@rc react-dom@rc
```

- ダミーページ作成   
```
mkdir pages
echo export default function Home() { return ( ^<^>test^</^> ) } > ./pages/index.js
```


- TypeScriptの利用準備
```
yarn add -D typescript
yarn run tsc --init

yarn add --dev @types/react @types/node
```

- ページの追加
/page/index.js を index.tsxに変更   

内容を記述   


## リポジトリに追加
```
git init
git add *
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/refrain62/nextjs_start_transition.git
git push -u origin main
```

## 動かす
```
yarn dev
```
