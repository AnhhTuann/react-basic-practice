import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import useFetch from "../hooks/useFetch";

function Practice2() {
  // 1. Tạo state để lưu trữ giá trị ô nhập liệu (search)
  const [search, setSearch] = useState("");
  // 2. Fetch data (Array users) từ API giống như bài 1
  const {
    data: user,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  //3. Thực hiện lọc danh sách users. Biến users ban đầu có thể chưa có data (null/undefined) nên cần dùng toán tử optional chaining (?.)
  const filteredUsers = user?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        Bài tập 2 - Lọc Người Dùng (Search)
      </Typography>
      {/* 4. Giao diện Ô Input Search */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <TextField
          label="Tìm kiếm bằng tên user..."
          variant="outlined"
          value={search} // Liên kết với state 'search'
          onChange={(e) => setSearch(e.target.value)} //Cập nhật state mỗi khi gõ
          sx={{ width: "100%", maxWidth: 400 }}
        ></TextField>
      </Box>
      {/* Xử lý hiển thị Loading / Error */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}
      {/* 5. Hiển thị danh sách người dùng và danh sách người dùng tìm kiếm */}
      {filteredUsers && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <Card key={user.id} elevation={3}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Email:</strong> {user.email}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            // 6. Hiển thị thống báo khi không tìm thấy người dùng tìm kiếm
            <Typography
              sx={{
                gridColumn: "1 / -1", // Cho nó chiếm full dòng ngang
                textAlign: "center",
                mt: 2,
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              Không tìm thấy người dùng tìm kiếm
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Practice2;
