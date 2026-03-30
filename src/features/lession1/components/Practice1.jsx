import { Stack, Button, Typography, Box, Badge, Paper } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useCounter from "../hooks/useCounter";
import DocsDialog from "../../../components/DocsDialog";
import practice1Docs from "../../../../docs/Practice1.md?raw";

function Practice1() {
  const { count, increase, decrease, reset } = useCounter();
  const [openDocs, setOpenDocs] = useState(false);
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
              🎯 MỤC TIÊU BÀI TẬP 1
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 0.5 }}>
              Tạo một bộ đếm số cơ bản. Yêu cầu: Nếu giá trị bị giảm xuống dưới 0 (số âm), giao diện phải tự động hiển thị dòng cảnh báo màu đỏ cho người dùng.
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
      <Stack spacing={3} alignItems="center">
        <Stack direction="row" spacing={{ xs: 2, sm: 3 }} alignItems="center">
          <Button
            variant="outlined"
            color="inherit"
            onClick={decrease}
            sx={{ opacity: 0.7, minWidth: { xs: 40, sm: 64 } }}
          >
            <RemoveIcon />
          </Button>

          <Badge
            badgeContent={count < 0 ? "Negative" : null}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, minWidth: { xs: 50, sm: 60 }, fontSize: { xs: '2.5rem', sm: '3rem'} }}>
              {count}
            </Typography>
          </Badge>

          <Button variant="outlined" color="primary" onClick={increase} sx={{ minWidth: { xs: 40, sm: 64 } }}>
            <AddIcon />
          </Button>
        </Stack>

        {count < 0 && (
          <Typography
            color="error"
            sx={{ fontWeight: 600, animate: "pulse 2s infinite" }}
          >
            Cảnh báo: Số đã xuống mức âm!
          </Typography>
        )}

        <Button
          variant="contained"
          color="secondary"
          onClick={reset}
          startIcon={<RestartAltIcon />}
          sx={{ mt: 1, px: 4 }}
        >
          Reset Counter
        </Button>
      </Stack>
      <DocsDialog open={openDocs} onClose={() => setOpenDocs(false)} content={practice1Docs} title="Hướng Dẫn Practice 1" />
    </Box>
  );
}

export default Practice1;
