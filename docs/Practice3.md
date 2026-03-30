# Giải thích Code - Practice 3 (Magic Clicker)

## Code Thực tế

```jsx
import { Box, Button, Typography, Stack, Paper, Alert } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import useCounter from "../hooks/useCounter";

function Practice3() {
  const { count, increase, reset } = useCounter();

  // Hàm sinh ra dòng chữ Trạng thái phụ thuộc vào số điểm Clicker
  const getFeedback = () => {
    if (count === 0)
      return { text: "Chưa click nào, hãy bắt đầu ngay! ✨", color: "text.secondary" };
      
    if (count <= 10)
      return { text: `Bạn đã click ${count} lần, tuyệt vời! 🚀`, color: "success.main" };
      
    if (count <= 20)
      return { text: `Wow, ${count} lần rồi! Hơi sung sức đấy! 🔥`, color: "warning.main" };
      
    // Trường hợp còn lại (lớn hơn 20)
    return { text: `Đỉnh cao! ${count} lần luôn! Nghiện thật rồi! 👑😱`, color: "error.main" };
  };

  // Kích hoạt hàm và gán Object Feedback vào một biến cục bộ
  const feedback = getFeedback();

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      {/*... Đề bài ... */}
      
      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 800 }}>
          Magic Clicker
        </Typography>

        <Box sx={{ position: "relative", mb: 4 }}>
            {/* IN SỐ LẦN CLICK ({count}) BẰNG SIZE CHỮ TO BỰ */}
          <Typography variant="h1" sx={{ fontWeight: 900 }}>
             {count}
          </Typography>
        </Box>

        <Stack spacing={2} alignItems="center">
            {/* NÚT THAO TÁC (TouchAppIcon) */}
          <Button variant="contained" size="large" onClick={increase} startIcon={<TouchAppIcon />}>
            Bấm Đi Bro!
          </Button>

          {/* ... Nút Reset ... */}
          
          <Box sx={{ mt: 4, p: 2, bgcolor: "rgba(255,255,255,0.03)" }}>
            {/* HIỂN THỊ CÂU FEEDBACK CÙNG VỚI MÀU SẮC ĐỒNG BỘ MÃ LỆNH if-else Ở TRÊN MỖI KHI RENDER LẠI */}
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: feedback.color }}>
              Notice: {feedback.text}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Practice3;
```

## Chìa khóa hiểu bài (Key Concepts)

### 1. Hàm Điều Phối UI (Helper Function)
Đoạn code bạn thấy bên trên có chứa một biến hàm phụ mang tên `getFeedback()`. Đây là một thủ thuật quan trọng.

Thay vì nhét một nùi Toán tử ba ngôi `count > 10 ? 'Tuyệt' : (count > 20 ? 'Khủng' : '')` thẳng trực tiếp lên cái mớ dòng JSX thẻ thẻ (Điều đó sẽ làm luồng chữ HTML bị rối loạn khủng khiếp như "Giọt nước hắt vào mặt"). 

Ta tạo ra một Function đứng ở đằng trước hàm Render của Thẻ JSX. Hàm này làm đúng một chuyện: Khảo sát số lượt đang sở hữu `count`, chui vào các nhánh cây điều kiện `if`, móc ra câu thông báo chuỗi đúng thông điệp cộng thêm một cái Tag tên biến màu `"success.main"`. Gói gọn tất cả chúng dưới dạng cục Object Trả về.

### 2. Rendering Từ Object
Biến nội bộ Const tự động thi hành phép khảo sát `const feedback = getFeedback();` mỗi một lần Click gọi Component Render.
Sau đó ở dưới lòng HTML ta chỉ việc lấy cái chốt đã bọc và in nó thoải mái ra `Notice: {feedback.text}` và truyền cho màu chữ tĩnh của CSS MUI thành thông tin động học `<Typography color={feedback.color}>`.
