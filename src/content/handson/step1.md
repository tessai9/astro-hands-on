---
title: 'プロジェクト作成'
descripion: 'Astroプロジェクトを作成しよう'
---

## 前提条件

- node, npm がインストール済み

## Work

1. npmの実行
    ```
    $ npm create astro@latest
    ```
1. プロジェクト名は`astro-hands-on`を設定
    ```
    $ Where would you like to create your new project? astro-hands-on
    ```
1. デフォルトのセットアップ（`a few best practice`）を選択
    ```
    ? How would you like to setup your new project? › - Use arrow-keys. Return to submit.
    ❯   a few best practices (recommended)
        a personal website starter kit
        an empty project
    ```
1. npm packageをインストール
    ```
    $ ? Would you like to install npm dependencies? y
    ```
1. git repositoryは作っても作らなくても...
    ```
    $ Would you like to initialize a new git repository? y
    ❯   Strict - (recommended)
        Strictest
        Relaxed
        Help me choose
    ```
1. プロジェクト作成完了！
    ```
    ╭─────╮  Houston:
    │ ◠ ◡ ◠  Good luck out there, astronaut!
    ╰─────╯
    ```
1. サーバを立ち上げてみよう！
    ```
    $ npm run dev
    ```
