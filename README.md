# 🚀 React Basic Practice

Một kho lưu trữ (repository) cá nhân dùng để học tập, thực hành và tổng hợp các kiến thức nền tảng của ReactJS. Dự án bao gồm các bài tập tương tác nhỏ gọn được thiết kế với giao diện cao cấp (Glassmorphism, Material UI).

## 🛠 Cài đặt & Chạy dự án

Dự án được khởi tạo bằng Vite. Để chạy dự án trên máy của bạn, hãy làm theo các bước sau:

```bash
# 1. Clone repository
git clone https://github.com/AnhhTuann/react-basic-practice.git
cd react-basic-practice

# 2. Cài đặt dependencies
npm install

# 3. Khởi chạy dev server
npm run dev
```

Sau đó, hãy truy cập vào `http://localhost:5173` (hoặc cổng hiển thị trên terminal) để xem ứng dụng.

## 🎯 Các tính năng & Bài tập hiện có (Lesson 1)
- **Practice 1:** Bộ đếm (Counter) cơ bản tích hợp cảnh báo động khi giá trị bị âm.
- **Practice 2:** Bộ đếm tương tác nâng cao, cho phép nhập Custom Amount để cộng/trừ số lượng lớn.
- **Practice 3:** Magic Clicker game thử thách tốc độ ngón tay, render thông báo (Feedback) liên tục dựa trên các mốc đếm.
- **Bài Tập Tổng Hợp:** Kết hợp toàn bộ các hook, event, và tư duy component thành một màn hình tương tác chuyên nghiệp.

---
---

# 📚 Sổ tay: Hướng dẫn ReactJS cơ bản (Đi từ 0 → Làm được App)

Dưới đây là các ghi chú cá nhân tóm tắt kiến thức thực chiến ReactJS cơ bản nhất.

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
