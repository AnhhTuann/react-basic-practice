import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import useFetch from "../hooks/useFetch";

function Practice1() {
  const {
    data: user,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", alignItems: "center" }}
      >
        Bài tập 1 - Danh sách Email Người Dùng
      </Typography>
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
      {user && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill , minmax(280px ,1fr))",
            gap: 2,
          }}
        >
          {user.map((user) => (
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
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Practice1;
