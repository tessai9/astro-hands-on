---
title: 'コンポーネント作成'
descripion: 'Astroコンポーネントを作ってみよう！'
---

# コンポーネントの作成

`src/components/TodoItem.astro`を作成する

```html
---
export interface Props {
  no: integer;
  time: string;
  content: string;
}

const {no, time, content} = Astro.props;
---

<tr>
  <td>{no}</td>
  <td>{time}</td>
  <td>{content}</td>
</tr>
```

# ToDoアイテムを定数化

`src/todos.ts`を作成

```typescript
const ToDos = [
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
  },
]
```

# コンポーネントの呼び出し

`src/page/index.html`を修正

```html
---
import BaseLayout from "../layout/BaseLayout.astro"
import ToDoItem from "../components/ToDoItem.astro"
import { ToDos } from "../todos.ts"
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
      { ToDos.map((todo, index) => (
        <ToDoItem no={index + 1} time={todo.time} content={todo.content}></ToDoItem>
      )) }
    </tbody>
  </table>
</BaseLayout>
```
