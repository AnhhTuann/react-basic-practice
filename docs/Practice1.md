# Giải thích Code - Practice 1 (Hiển thị cảnh báo màu đỏ)

## Code Thực tế

```jsx
import { Stack, Button, Typography, Box, Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useCounter from "../hooks/useCounter";

function Practice1() {
  // Lấy dữ liệu và hàm từ Custom Hook useCounter
  const { count, increase, decrease, reset } = useCounter();
  
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Stack spacing={3} alignItems="center">
        {/* Hàng 1: Nút +, Nút -, Số Đếm */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Button variant="outlined" color="inherit" onClick={decrease}>
            <RemoveIcon />
          </Button>

          {/* Dùng Badge để gắn mác màu đỏ nếu số âm */}
          <Badge
            badgeContent={count < 0 ? "Negative" : null}
            color="error"
          >
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              {count}
            </Typography>
          </Badge>

          <Button variant="outlined" color="primary" onClick={increase}>
            <AddIcon />
          </Button>
        </Stack>

        {/* CẢNH BÁO DÒNG CHỮ: Chỉ hiển thị khi điều kiện đếm < 0 */}
        {count < 0 && (
          <Typography color="error" sx={{ fontWeight: 600 }}>
            Cảnh báo: Số đã xuống mức âm!
          </Typography>
        )}

        {/* Nút Reset */}
        <Button variant="contained" color="secondary" onClick={reset} startIcon={<RestartAltIcon />}>
          Reset Counter
        </Button>
      </Stack>
    </Box>
  );
}

export default Practice1;
```

## Chìa khóa hiểu bài (Key Concepts)

### 1. Phân rã dữ liệu (Destructuring) State từ Custom Hook
Trong bài này, thay vì lặp lại khai báo `useState`, chúng ta dùng lại `useCounter()` và trích xuất `count` cũng như 3 hàm chức năng. Bất kỳ lúc nào bạn gọi `increase` bằng thao tác Click, state nội bộ của Hook thay đổi -> Kích phát lệnh ép React Render lại `Practice1.jsx` này, do đó `{count}` đổi giá trị lập tức hiển thị.

### 2. Rendering Có Điều Kiện (`&&`)
Bạn có thể thấy đoạn code:
```jsx
{count < 0 && ( <Typography>Cảnh báo...</Typography> )}
```
Đây là kỹ thuật kinh điển. Bằng cách nối `(điều kiện) && (giao diện)`, nếu điều kiện SAI (vd: đếm > 0), React sẽ không in UI cái gì cả. Nếu TRUE, JSX thẻ `Typography` vẽ chữ cảnh báo được return.

### 3. Component `Badge` (Huy hệu đính kèm số lượng)
Tương tự, Badge của MUI dùng thuộc tính `badgeContent`. Nếu ta truyền `null` thì nó tự động ẩn đi. Bắt ngay điều kiện: `count < 0 ? "Negative" : null`. Đây là toán tử 3 ngôi gán thuộc tính Động.
