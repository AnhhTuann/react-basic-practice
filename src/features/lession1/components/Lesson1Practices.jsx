import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  Paper,
  IconButton,
  Fade,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import useCounter from "../hooks/useCounter";
import { useState } from "react";
import DocsDialog from "../../../components/DocsDialog";
import lesson1PracticesDocs from "../../../../docs/Lesson1Practices.md?raw";

const Lesson1Practices = () => {
  const { count, increaseBy, decreaseBy, reset, decrease, increase } =
    useCounter();
  const [input, setInput] = useState(1);
  const [openDocs, setOpenDocs] = useState(false);

  const getStatusMessage = () => {
    if (count > 20)
      return {
        text: `Đỉnh cao! ${count} lần luôn! Nghiện thật rồi!`,
        color: "error.main",
        icon: <LocalFireDepartmentIcon />,
      };
    if (count > 10)
      return {
        text: `Wow, ${count} lần rồi! Hơi sung sức đấy! 🔥`,
        color: "warning.main",
        icon: <RocketLaunchIcon />,
      };
    if (count < 0)
      return {
        text: "Counter is negative!",
        color: "error.light",
        icon: <WarningAmberIcon />,
      };
    if (count === 0)
      return {
        text: "Counter is at zero!",
        color: "text.secondary",
        icon: <TrendingUpIcon />,
      };
    return null;
  };

  const status = getStatusMessage();

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          width: '100%',
          mb: 4, 
          background: 'rgba(6, 182, 212, 0.05)', 
          border: '1px solid rgba(6, 182, 212, 0.2)', 
          borderRadius: 4, 
          textAlign: 'left' 
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={3}>
          <Box flex={1}>
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: 1.5 }}>
              🎯 MỤC TIÊU BÀI TẬP TỔNG HỢP
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 0.5 }}>
              Khung chức năng "khủng" bao gồm Bộ đếm, Form Input Tuỳ chỉnh và Logic hiển thị Text cảnh báo biến đổi tự động. Tất cả ứng dụng UX/UI Glassmorphism cấp độ cao.
            </Typography>
          </Box>
          <Button 
            variant="contained"
            onClick={() => setOpenDocs(true)} 
            sx={{ 
              minWidth: 180,
              background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
              color: 'white',
              fontWeight: 'bold', 
              borderRadius: 3,
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
              textTransform: 'none',
              py: 1,
              transition: 'all 0.2s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: '0 6px 20px rgba(6, 182, 212, 0.4)' }
            }}
          >
            💡 Xem Lời Giải & Code
          </Button>
        </Stack>
      </Paper>

      {/* Main Counter Card with Glassmorphism */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #6366f1, transparent)",
          },
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.6 }}>
          ACTIVITY COUNT
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{ my: 4 }}
        >
          <IconButton
            onClick={decrease}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:active": { transform: "scale(0.9)" },
            }}
          >
            <RemoveIcon />
          </IconButton>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              minWidth: 100,
              background: "linear-gradient(135deg, #fff 30%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
              userSelect: "none",
            }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={increase}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:active": { transform: "scale(0.9)" },
            }}
          >
            <AddIcon />
          </IconButton>
        </Stack>

        {/* Dynamic Status Badge */}
        <Box
          sx={{
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade in={!!status} key={status?.text}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: status?.color,
                bgcolor: "rgba(0,0,0,0.2)",
                px: 2,
                py: 0.5,
                borderRadius: 20,
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "1px solid currentColor",
                opacity: 0.8,
              }}
            >
              {status?.icon}
              {status?.text}
            </Box>
          </Fade>
        </Box>
      </Paper>

      {/* Advanced Controls Section */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 400,
          background: "rgba(255, 255, 255, 0.02)",
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="number"
            label="Increment/Decrement Value"
            variant="filled"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
            InputProps={{
              disableUnderline: true,
              sx: {
                borderRadius: 2,
                "& input": {
                  textAlign: "center",
                  fontWeight: 600,
                  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  MozAppearance: "textfield",
                },
              },
            }}
          />

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => decreaseBy(input)}
              sx={{ py: 1.5, borderRadius: 2 }}
            >
              Minus {input}
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => increaseBy(input)}
              sx={{ py: 1.5, borderRadius: 2 }}
            >
              Plus {input}
            </Button>
          </Stack>

          <Button
            fullWidth
            variant="text"
            color="inherit"
            startIcon={<RestartAltIcon />}
            onClick={reset}
            sx={{ opacity: 0.6, "&:hover": { opacity: 1 } }}
          >
            Reset to Default
          </Button>
        </Stack>
      </Paper>

      {/* Miscellaneous Actions */}
      <Button
        variant="outlined"
        sx={{
          borderRadius: 8,
          py: 1.5,
          px: 6,
          borderColor: "rgba(255,255,255,0.1)",
          color: "text.secondary",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 600,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
            background: "rgba(99, 102, 241, 0.08)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
        onClick={increase}
      >
        Click me
      </Button>
      <DocsDialog open={openDocs} onClose={() => setOpenDocs(false)} content={lesson1PracticesDocs} title="Hướng Dẫn Bài Tổng Hợp" />
    </Box>
  );
};

export default Lesson1Practices;
