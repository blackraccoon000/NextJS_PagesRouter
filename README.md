### ログイン状況により Layout を切り替えるサンプル

`npm run dev`から`http://localhost:3000/test`を開く

### 構成

- ログイン済みレイアウト `src/components/layouts/LoggedInLayout`
- 未ログインレイアウト `src/components/layouts/NotLoginLayout`
- 上記を束ねる `src/components/layouts/Layout`

現在は暫定的に `src/pages/api/loggedin.api.ts` からログイン状態をランダムで取得し表示する構成にしている。

### 参考

#### 未ログイン

![未ログイン](document/images/screen-shot20240410.png)

#### ログイン済み

![ログイン済み](document/images/screen-shot20240410_2.png)
