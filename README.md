# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Hướng dẫn ReactJS cơ bản (Đi từ 0 → Làm được App)

## 1. ReactJS là gì?
- Là thư viện JavaScript dùng để xây dựng giao diện (UI)
- Do Facebook phát triển
- Dùng để làm web động (SPA) nhanh, mượt
👉 **Hiểu đơn giản**: React giúp bạn chia giao diện thành component nhỏ và tái sử dụng.

## 2. Cài đặt môi trường
Cách nhanh nhất (khuyên dùng):
```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```
👉 Sau đó mở: `http://localhost:5173`

## 3. Kiến thức nền cần có
Trước khi học React, bạn nên biết:
- HTML, CSS
- JavaScript (ES6):
  - arrow function
  - destructuring
  - map, filter

## 4. Component (cốt lõi của React)
```jsx
function Hello() {
  return <h1>Hello React</h1>;
}

export default Hello;
```
👉 Component = hàm trả về giao diện

## 5. JSX (cách viết UI)
JSX = HTML trong JavaScript
```jsx
const element = <h1>Xin chào</h1>;
```
⚠️ **Lưu ý**:
- Phải có 1 thẻ cha
- Dùng `{}` để nhúng JS
```jsx
const name = "Anh";
return <h1>Hello {name}</h1>;
```

## 6. Props (truyền dữ liệu)
```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

<Welcome name="Tuấn" />
```
👉 Props = dữ liệu truyền từ cha → con

## 7. State (dữ liệu thay đổi)
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```
👉 State giúp UI tự update khi dữ liệu thay đổi

## 8. Event (sự kiện)
```jsx
<button onClick={() => alert("Clicked!")}>
  Click me
</button>
```

## 9. Render list
```jsx
const items = ["A", "B", "C"];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

## 10. Điều kiện (if)
```jsx
const isLogin = true;

return (
  <div>
    {isLogin ? <p>Đã login</p> : <p>Chưa login</p>}
  </div>
);
```

## 11. Lộ trình học React cho bạn
- **Giai đoạn 1 (cơ bản)**: JSX, Component, Props, State, Event
- **Giai đoạn 2 (quan trọng)**: useEffect, React Router, Form + validation
- **Giai đoạn 3 (thực chiến)**: Làm project (Todo App, Web bán hàng, Blog)
