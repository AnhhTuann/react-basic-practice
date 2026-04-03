import { Box, Typography, Button, CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";

function Lession2() {
  // Sử dụng custom hook gọi API thay vì code dài dòng trong component
  const {
    data: user,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

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
        Lesson 2 - Custom Hook (useFetch)
      </Typography>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        Danh sách người dùng
      </Typography>

      {/* Quản lý các trạng thái từ hook useFetch */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      ) : (
        <Box>
          {user?.map((user) => (
            <Typography key={user.id} sx={{ my: 0.5 }}>
              {user.name}
            </Typography>
          ))}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={refetch}
          >
            Gọi lại API (Refetch)
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default Lession2;
