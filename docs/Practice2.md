# Giải thích Code - Practice 2 (Input handling)

## Code Thực tế

```jsx
import { Box, Typography, TextField, Button, Stack, Alert } from "@mui/material";
import { useState } from "react";
import useCounter from "../hooks/useCounter";

function Practice2() {
  const { count, increaseBy, decreaseBy, reset } = useCounter();
  
  // State quản lý giá trị người dùng nhập vào Input
  const [input, setInput] = useState(1); 

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      {/* ... Alert Đề Bài ... */}

      {/* HIỂN THỊ KẾT QUẢ ĐẾM */}
      <Typography variant="h3" sx={{ mb: 4, color: "primary.main", fontWeight: "bold" }}>
          {count}
      </Typography>

      <Stack spacing={2} sx={{ maxWidth: 300, mx: "auto" }}>
        
        {/* INPUT: Lắng nghe sự kiện người dùng gõ phím */}
        <TextField
          type="number"
          label="Custom Amount"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />

        {/* NÚT BẤM: Cộng lượng tuỳ ý (increaseBy) */}
        <Stack direction="row" spacing={1}>
          <Button color="primary" onClick={() => increaseBy(input)}>
            Add
          </Button>
          <Button color="secondary" onClick={() => decreaseBy(input)}>
            Sub
          </Button>
        </Stack>

        <Button onClick={reset}>Reset</Button>
      </Stack>
    </Box>
  );
}
export default Practice2;
```

## Chìa khóa hiểu bài (Key Concepts)

### 1. Sự kiện OnChange trong TextField
Trong React, ô Input hoạt động khác HTML thuần một chút. Khác với Javascript thông thường (DOM Selector), ở đây State (biến nội bộ của File) mới chính là "Chúa Tể" nắm giữ dữ liệu (gọi là 2-way binding).
- Giá trị hiển thị tại `TextField` luôn bị kiểm soát và ép buộc đồng bộ cứng với biến `value={input}`.
- Mỗi khi bạn nhấn bàn phím gõ vào ô, sự kiện `onChange` kích hoạt và bắn ra sự kiện `e`. Từ điển chứa ký tự mới của bạn nằm tại `e.target.value` (mặc định là chữ String).
- Hàm `setInput(Number(e.target.value))` được thiết lập để nhận chuỗi ký tự đó, ép trở lại định dạng Số Nguyên (`Number`), rồi sau đó báo React cập nhật lại cái lõi State `input`. 
- Một khi State `input` đổi, Component này tự Render xoay tua thêm 1 lượt nữa -> In cái số mới bạn vừa gõ vào Ô Text!

### 2. Định tuyến dữ liệu động (Dynamic Payload) xuyên Component
Thay vì gọi `increase()` để thêm đúng 1 đơn vị đếm cố định như Practice 1. Bài này dùng hàm nâng cao hơn là `increaseBy(input)`. 
Bất kì số nào bạn vừa nhập sẵn vào Ô Input (đang lưu tạm ở `state input`) đều sẽ được nhặt "nguyên xi", bọc thành thông số Argument truyền ngược qua cầu nối sang Custom Hook `useCounter` để làm tham số phép tính Cộng khổng lồ.

### 3. Vòng tuần hoàn Đếm (One-way Data Flow)
Nhấn Add `=>` Kích hoạt hành động `onClick` `=>` Hàm mang số Input ném vào Logic `useCounter` `=>` Logic đếm số tính toán thành công `=>` Kích thích React Component Render báo tin có thay đổi mới `=>` Trả lại HTML JSX `=>` `Typography` có chứa `{count}` sẽ có số mới!
