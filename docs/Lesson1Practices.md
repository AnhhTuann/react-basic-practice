# Giải thích Code - Lesson 1 Practices (Bài Tập Tổng Hợp)

## Code Thực tế

```jsx
import { Box, Button, Typography, Stack, Alert } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/**
 * COMPONENT MÓN HÀNG RIÊNG RẼ
 * Quản lý số lượng riêng biệt của nó bằng State tự thân
 */
function ShopItem({ name, price, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(q => q + 1);
    onQuantityChange(1); // Báo cáo cho thằng Cha: Tui vừa tăng 1 món
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(q => q - 1);
      onQuantityChange(-1); // Báo cáo: Tui vứt lại 1 món
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography>{name} - ${price}</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button size="small" variant="outlined" onClick={handleDecrease}>-</Button>
        <Typography sx={{ minWidth: 20, textAlign: "center" }}>{quantity}</Typography>
        <Button size="small" variant="outlined" onClick={handleIncrease}>+</Button>
      </Stack>
    </Stack>
  );
}

/**
 * COMPONENT TỔNG HỢP (CHA)
 */
function Lesson1Practices() {
  // State quản lý Giỏ hàng (Tổng số lượng món hàng đã chọn từ tất cả Component Con)
  const [totalItems, setTotalItems] = useState(0);

  // Hàm Callback truyền xuống cho Con xài
  const handleItemChange = (amount) => {
    setTotalItems(prev => prev + amount);
  };

  return (
    <Box sx={{ p: 3 }}>
        {/* ... Lời dẫn Đề bài ... */}

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h5">Cửa Hàng Quần Áo</Typography>
        <Badge badgeContent={totalItems} color="error">
          <ShoppingCartIcon fontSize="large" color="action" />
        </Badge>
      </Stack>

      <Stack spacing={2}>
        {/* TRUYỀN HÀM XUỐNG DƯỚI QUA PROPERTY (PROPS) */}
        <ShopItem name="Áo Thun" price={100} onQuantityChange={handleItemChange} />
        <ShopItem name="Quần Jean" price={250} onQuantityChange={handleItemChange} />
        <ShopItem name="Giày Sneaker" price={500} onQuantityChange={handleItemChange} />
      </Stack>
    </Box>
  );
}

export default Lesson1Practices;
```

## Chìa khóa hiểu bài (Key Concepts)

### Lifting State Up (Đẩy State Lên Cha)
Bài này minh hoạ tuyệt chiêu **"Mượn sức mạnh từ Cấp Trên"**.
- Cửa hàng (Ông Cha - `Lesson1Practices`) quản lý một cuốn sổ ghi nợ (Giỏ hàng - `totalItems`) để đếm lượng tồn kho người ta khuân đi.
- Mỗi một mặt hàng tự nó chỉ nắm bắt cái tủ riêng (`quantity`) và chẳng biết mấy bạn kia bán được bao nhiêu.
- Để báo tin số hàng này lên Tổng Bộ, Ông Cha móc Nối cái Đường Dây Nóng (Hàm `handleItemChange`) chui tọt thành cái Thuộc Tính (Prop có tên `onQuantityChange`) thẩy xuống từng sạp hàng `ShopItem`.
- Mỗi khi Nhấn `+` hoặc `-`. Thằng Con (`ShopItem`) sẽ GỌI cái Đường Dây Nóng kia, đính kèm kèm số 1 (Tăng) hoặc -1 (Giảm) đẩy vút lên trên!
- Nhờ Cú Callback dội ngược này lên Cụ Cha, biến `totalItems` vọt lên thay đổi -> Toàn bộ mảng Cha Render bọc theo số lượng trên Giỏ Hàng (`ShoppingCartIcon`) -> SỐ ĐỔI TÙY Ý !

Đó là luồng luân chuyển logic cốt lõi của React!
