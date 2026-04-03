import { Box, Button, Typography, Stack, Paper, Alert } from "@mui/material";
import { useState } from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import useCounter from "../hooks/useCounter";
import DocsDialog from "../../../components/DocsDialog";
import practice3Docs from "../../../../docs/Practice3.md?raw";

function Practice3() {
  const { count, increase, reset } = useCounter();
  const [openDocs, setOpenDocs] = useState(false);

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
    <Box sx={{ p: { xs: 1.5, md: 3 }, textAlign: "center" }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 1.5, sm: 2 }, 
          mb: { xs: 2, sm: 3 }, 
          background: 'rgba(6, 182, 212, 0.05)', 
          border: '1px solid rgba(6, 182, 212, 0.2)', 
          borderRadius: 4, 
          textAlign: 'left' 
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={3}>
          <Box flex={1}>
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: 1.5 }}>
              🎯 MỤC TIÊU BÀI TẬP 3
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 0.5 }}>
              Tạo một trò chơi "Magic Clicker". Xây dựng bộ đếm sao cho mỗi khi lượng Click vượt qua các mốc nhất định (Ví dụ: 10 lần, 20 lần), giao diện sẽ tự động hiển thị các câu thông báo động viên phản hồi tương ứng với cấp độ đó.
            </Typography>
          </Box>
          <Button 
            variant="contained"
            onClick={() => setOpenDocs(true)} 
            sx={{ 
              minWidth: { xs: '100%', sm: 160 },
              background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
              color: 'white',
              fontWeight: 'bold', 
              borderRadius: 3,
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
              textTransform: 'none',
              py: { xs: 0.5, sm: 1 },
              transition: 'all 0.2s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: '0 6px 20px rgba(6, 182, 212, 0.4)' }
            }}
          >
            💡 Xem Lời Giải & Code
          </Button>
        </Stack>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3 },
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
              px: { xs: 3, sm: 6 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "1rem", sm: "1.2rem" },
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
              width: { xs: '100%', sm: 'auto' },
              minWidth: { xs: 0, sm: 300 },
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
      <DocsDialog open={openDocs} onClose={() => setOpenDocs(false)} content={practice3Docs} title="Hướng Dẫn Practice 3" />
    </Box>
  );
}

export default Practice3;
