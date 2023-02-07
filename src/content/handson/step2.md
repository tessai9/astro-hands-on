---
title: 'ディレクトリ構成'
descripion: 'Astroの構成を知ろう！'
---

## 初期構成

```
- README.md
- astro.config.mjs
- package.json
- package-lock.json
- public/
- src/
    components/
    layouts/
    pages/
    env.d.ts
- tsconfig.json
```

### astro.config.mjs

Astroプロジェクト全体の設定ファイル
`npx astro add xxx`でプラグインを追加したときなどこのファイルに設定が書き込まれる

### public

アイコンやフォントなど、ビルドに含めない静的アセットファイルを格納する

### src

astroのメインフォルダ
後々触れていくastroコンポーネントやmd, mdx, ts, jsxなどはここに格納されていく

- components

  細かいUIパーツとなるコンポーネントを格納する
  astroコンポーネントはもちろん、Reactなどを導入していればjsxコンポーネントとなども共存できる

- layouts

  表示するページのベースになるようなページテンプレートのastroコンポーネントを格納する

- pages

  サイト内の各ページとなるコンポーネントを格納する
  astroファイルの他にmdファイルもページとして表示することができる

### 参考

[Project Structure](https://docs.astro.build/ja/core-concepts/project-structure/)
