import { Box, Button, Typography, Stack, Paper } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import useCounter from "../hooks/useCounter";

function Practice3() {
  const { count, increase, reset } = useCounter();

  const getFeedback = () => {
    if (count === 0)
      return {
        text: "Chưa click nào, hãy bắt đầu ngay! ✨",
        color: "text.secondary",
      };
    if (count <= 10)
      return {
        text: `Bạn đã click ${count} lần, tuyệt vời! 🚀`,
        color: "success.main",
      };
    if (count <= 20)
      return {
        text: `Wow, ${count} lần rồi! Hơi sung sức đấy! 🔥`,
        color: "warning.main",
      };
    return {
      text: `Đỉnh cao! ${count} lần luôn! Nghiện thật rồi! 👑😱`,
      color: "error.main",
    };
  };

  const feedback = getFeedback();

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(244, 63, 94, 0.05) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 800 }}>
          Magic Clicker
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, opacity: 0.6 }}>
          Thử thách tốc độ ngón tay của bạn
        </Typography>

        <Box sx={{ position: "relative", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              background: "linear-gradient(45deg, #6366f1, #f43f5e)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))",
              userSelect: "none",
            }}
          >
            {count}
          </Typography>
        </Box>

        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<TouchAppIcon />}
            onClick={increase}
            sx={{
              px: 8,
              py: 2,
              fontSize: "1.2rem",
              borderRadius: 50,
              boxShadow: "0 8px 16px rgba(99, 102, 241, 0.3)",
              transition: "all 0.2s",
              "&:active": { transform: "scale(0.95)" },
            }}
          >
            Bấm Đi Bro!
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={reset}
            sx={{ opacity: 0.5 }}
          >
            Reset
          </Button>

          <Box
            sx={{
              mt: 4,
              p: 2,
              borderRadius: 2,
              bgcolor: "rgba(255,255,255,0.03)",
              minWidth: 300,
              transition: "all 0.3s",
              border: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: feedback.color,
              }}
            >
              Notice: {feedback.text}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Practice3;
