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

```
---
// ここにTypeScriptが記述できます
import BaseLayout from "../layout/BaseLayout.astro"
---
<BaseLayout>
  <h1>Astroハンズオン</h1>
  <hr>
  <!-- ここにToDoリストを表示する -->
</BaseLayout>
```
