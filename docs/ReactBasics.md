# Hướng dẫn ReactJS cơ bản toàn diện (Từ 0 → Làm được App)

## 1. ReactJS là gì?
- **ReactJS** là một thư viện JavaScript dùng để xây dựng giao diện người dùng (User Interface - UI).
- Được Facebook (Meta) phát triển và mã nguồn mở.
- Tối ưu cho việc tạo các **Single Page Applications (SPA)**, trang web tải nhanh, đổi trang mượt mà không cần chớp màn hình vì không phải reload lại toàn bộ trang web.
- Ý tưởng cốt lõi của React là chia nhỏ UI phức tạp thành các thành phần độc lập, tải riêng lẻ, có thể tái sử dụng được (gọi là **Components**).

---

## 2. Component (Mảnh ghép cốt lõi của React)
Mọi ứng dụng React đều được cấu tạo từ các Component. Bạn có thể hiểu Component như một hàm JavaScript trả về HTML (hay chính xác hơn là JSX). Nó gói gọn HTML, CSS và JS lại trong một khối duy nhất.

```jsx
// Định nghĩa một Component đơn giản
function Button() {
  return <button>Click tôi đi</button>;
}

// Chèn Component vào một Component lớn hơn
export default function App() {
  return (
    <div>
      <h1>Phần mềm của tôi</h1>
      {/* Gọi Component Button như một thẻ HTML thông thường */}
      <Button /> 
    </div>
  );
}
```

---

## 3. JSX (Viết HTML trong JavaScript)
JSX là một cú pháp mở rộng của JavaScript, cho phép bạn viết các thẻ HTML ngay bên trong code logic JS. Dưới mui xe, nó sẽ được dịch ra các hàm tạo thẻ DOM của Javascript.

**Quy tắc bắt buộc của JSX:**
1. Mọi JSX trả về phải được bọc trong **1 thẻ cha duy nhất** (thường dùng thẻ bọc vô hình `<>` hoặc `<div>`).
2. Mọi thẻ HTML bắt buộc phải được **đóng** (ví dụ: `<img />`, `<input />`, `<br />`).
3. Đổi thuộc tính `class` thành `className` (Vì class là một từ khoá dành sẵn trong JS).
4. Dùng ngoặc nhọn `{}` để nhúng bất kỳ biến số, biểu thức, hoặc hàm con JavaScript nào vào trong giao diện HTML.

```jsx
const user = "Tuấn";
const age = 25;

const element = (
  <>
    <h1 className="title">Xin chào {user}</h1>
    <p>Bạn năm nay {age} tuổi</p>
  </>
);
```

---

## 4. Props (Truyền tham số từ Cha → Con)
Props là cách mà Component cha giao tiếp, truyền tham số, truyền dữ liệu cho Component con.
Props **chỉ đọc** (read-only), Component con không được phép sửa đổi giá trị props truyền xuống từ cha.

```jsx
// Khai báo tham số props để lấy dữ liệu
function Welcome(props) {
  return <h1>Xin chào {props.name}, nay bạn {props.age} tuổi</h1>;
}

// Sử dụng từ component cha:
export default function App() {
  return (
    <>
      <Welcome name="Tuấn" age={20} />
      <Welcome name="Lan" age={22} />
    </>
  );
}
```

---

## 5. State (Trạng thái nội bộ của Component)
Khi Dữ Liệu thay đổi, Giao Diện phải thay đổi. React cung cấp một Hook tên là `useState` để bạn lưu trữ dữ liệu có thể biến đổi.
Chỉ khi thay đổi dữ liệu thông qua hàm `setState()`, React mới tự động vẽ lại (re-render) Component đó với dữ liệu mới cập nhật trên màn hình.

```jsx
import { useState } from "react";

function Counter() {
  // useState(0) khởi tạo count = 0, hàm setCount dùng để cập nhật biến count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      {/* Khi click, gọi hàm setCount để báo React tăng count lên 1 */}
      <button onClick={() => setCount(count + 1)}>
        Bấm tôi!
      </button>
    </div>
  );
}
```

---

## 6. Events (Xử lý sự kiện)
Trong React, xử lý sự kiện rất giống với HTML, nhưng có một vài khác biệt:
- Sự kiện được viết ở dạng **camelCase** thay vì lowercase (ví dụ: `onClick` thay vì `onclick`, `onChange` thay vì `onchange`).
- Bắt buộc phải truyền vào một hàm (function/callback) chứ không phải là xử lý Logic trực tiếp.

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault(); // Ngăn trình duyệt tự động gửi form và reload trang theo mặc định HTML
    alert('Đã gửi thành công!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Gửi thông tin</button>
    </form>
  );
}
```

---

## 7. Render có điều kiện (Conditional Rendering)
Bạn có thể dùng JS cơ bản để vẽ giao diện tuỳ theo điều kiện logic (toán tử 3 ngôi `a ? b : c`, hoặc toán tử `&&`). Rất cần thiết trong việc hiển thị theo trạng thái.

```jsx
function StatusBar({ isOnline }) {
  // Dùng toán tử 3 ngôi (tertiary operator)
  return (
    <div>
      {isOnline ? <h1>Bạn đang Online 🟢</h1> : <h1>Bạn đang Offline 🔴</h1>}
    </div>
  );
}

function Notifications({ unreadCount }) {
  return (
    <div>
      {/* Chỉ hiện tiêu đề thẻ <h2> nếu unreadCount > 0 */}
      {unreadCount > 0 && <h2>Bạn có {unreadCount} tin nhắn chưa đọc!</h2>}
    </div>
  );
}
```

---

## 8. Render danh sách (Lists & Keys)
Khi có một mảng dữ liệu (`array`), hãy dùng hàm `.map()` của JavaScript để lặp qua và sinh ra các phần tử thiết kế.
**Quan trọng:** Mỗi phần tử được render ra từ mảng cần phải được gắn thuộc tính `key` (nên dùng id duy nhất) để React nhận dạng, xoá/sửa đúng item mà không tốn công tối ưu màn hình.

```jsx
const fruits = [
  { id: 1, name: 'Táo', isFruit: true },
  { id: 2, name: 'Bắp Cải', isFruit: false },
  { id: 3, name: 'Chuối', isFruit: true }
];

function ShoppingList() {
  return (
    <ul>
      {fruits.map((item) => (
        <li 
          key={item.id} 
          style={{ color: item.isFruit ? 'green' : 'red' }} // Áp dụng Style inline
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

---

## 9. Vòng đời Components & Tác dụng phụ (useEffect)
`useEffect` dùng để xử lý cái mớ hỗn độn liên quan đến bên ngoài React (gọi API lấy dữ liệu, thao tác bằng tay với thẻ DOM, đăng kí các hàm hẹn giờ `setInterval`).
- Nếu quên thêm mảng phụ thuộc `[]`, nó sẽ chạy vô tận và treo ứng dụng.
- **Có thể nhấn vào Docs phần Lesson 1 để xem bài viết rất chi tiết về Effect Hook.**

---

## Lời khuyên cuối cùng
1. Hãy tập tính cấu trúc: **Chia nhỏ hệ thống giao diện** ra giấy hoặc Figma trước khi code (ví dụ: nguyên mảng Layout => Header, Sidebar, Body => PostList).
2. Phân biệt rõ sự khác nhau giữa `State` (dữ liệu động rẽ nhánh thay đổi ngay bên trong nội bộ Component đó) và `Props` (dữ liệu truyền thẳng từ component cha xuống các con - để các con chỉ có việc "hiển thị ra mà thôi").
