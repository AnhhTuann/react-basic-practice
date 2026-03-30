import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Lession2() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      //useEffect chạy khi load component, chỉ chạy 1 lần
      const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        //fetch API trả về 1 promise, phải dùng await để chờ kết quả
        const data = await res.json();
        //chuyển đổi kết quả thành JSON, cũng trả về 1 promise
        setUsers(data);
        //cập nhật state với dữ liệu đã lấy được
        setLoading(false);
        //đặt loading thành false để hiển thị dữ liệu sau khi đã tải xong
      };

      fetchData();
    },
    [],
    //truyền mảng rỗng làm dependency để useEffect chỉ chạy 1 lần khi component được mount
  );

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography
        variant="overline"
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          mb: 1,
          display: "block",
        }}
      >
        Interactive Tutorial
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
        Lesson 2 - useEffect()
      </Typography>
      <Typography variant="h6" color="primary">
        Danh sách người dùng
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        user.map((user) => <Typography key={user.id}>{user.name}</Typography>)
      )}
    </Box>
  );
}
export default Lession2;
