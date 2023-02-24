---
title: 'ページ作成'
descripion: 'ページを作ってみよう！'
---

# ページテンプレートの作成

`src/layouts/`に`BaseLayout.astro`を作成する

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astroハンズオン</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

## ポイント

- Layoutは、基本的に他のページでも記述が必要になるもの（`<html>`とか`<head>`とか）を共通化するために使用される
- 必ずファイルが必要という訳ではないので、１ページで完結するサイトとかなら作成しなくても良い

# ToDo一覧ページの作成

`src/pages/`に`index.astro`を作成する

ToDo部分は一旦ハードコードします

```
---
// ここにTypeScriptが記述できます
import BaseLayout from "../layout/BaseLayout.astro"

const todos = [
  {
    time: '10:00〜',
    content: 'ヨガ'
  },
  {
    time: '14:00〜',
    content: '打ち合わせ@zoom'
  },
  {
    time: '17:00〜',
    content: '夕飯の買い物'
  }
]
---
<BaseLayout>
  <h1>Astroハンズオン</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>時間</th>
        <th>やること</th>
      </tr>
    </theah>
    <tbody>
      { todos.map((item, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{item.time}</td>
          <td>{item.content}</td>
        </tr>
      )) }
    </tbody>
  </table>
</BaseLayout>
```
