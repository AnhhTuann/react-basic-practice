# Hướng dẫn sử dụng useEffect trong ReactJS

## 1. useEffect là gì?
`useEffect` là một Hook trong React cho phép bạn thực hiện các **side effect** (tác dụng phụ) trong function components.
- Tương đương với các lifecycle methods trong class components: `componentDidMount`, `componentDidUpdate`, và `componentWillUnmount`.

## 2. Cú pháp cơ bản
```jsx
useEffect(() => {
  // Thực thi side effect ở đây

  return () => {
    // (Tùy chọn) Cleanup function - chạy trước khi component unmount hoặc trước khi effect chạy lại
  };
}, [dependencies]); // Mảng các phụ thuộc (có thể có hoặc không)
```

## 3. Các trường hợp sử dụng (3 cách truyền dependencies)

### Trường hợp 1: Không có mảng dependencies
Effect sẽ chạy sau **mỗi lần** render. Cẩn thận vì dễ gây ra vòng lặp vô hạn (infinite loop).
```jsx
useEffect(() => {
  console.log("Chạy sau MỖI LẦN render");
});
```

### Trường hợp 2: Mảng dependencies rỗng `[]`
Effect chỉ chạy **MỘT LẦN DUY NHẤT** sau lần render đầu tiên (componentDidMount). Thường dùng để gọi API ban đầu.
```jsx
useEffect(() => {
  console.log("Chỉ chạy 1 lần khi component vừa mount");
}, []);
```

### Trường hợp 3: Có phần tử trong mảng dependencies `[state, prop]`
Effect sẽ chạy ở lần render đầu tiên **VÀ** mỗi khi một trong các giá trị trong mảng (`state` hoặc `prop`) thay đổi.
```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count đã thay đổi thành: ${count}`);
}, [count]); // Chỉ chạy khi 'count' thay đổi
```

## 4. Cleanup function (Dọn dẹp)
Khi bạn cần hủy đăng ký (unsubscribe), xóa timer (clearTimeout, clearInterval), hoặc gỡ bỏ sự kiện (removeEventListener) để tránh **memory leak** (rò rỉ bộ nhớ).
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick toc...");
  }, 1000);

  // Cleanup: sẽ chạy khi component unmount
  return () => clearInterval(timer);
}, []);
```

## 5. Ví dụ thực tế: Fetching Data API
```jsx
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // [] đảm bảo chỉ gọi API 1 lần

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

## 💡 Tóm lại:
- `useEffect` kết nối React component của bạn với các hệ thống bên ngoài (API, DOM, Timer...).
- Hãy luôn chú ý đến mảng **dependencies** (`[...]`) để kiểm soát khi nào Effect nên chạy lại.
