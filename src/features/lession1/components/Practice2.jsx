import { Box, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import { useState } from "react";
import useCounter from "../hooks/useCounter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DocsDialog from "../../../components/DocsDialog";
import practice2Docs from "../../../../docs/Practice2.md?raw";

function Practice2() {
  const { count, increaseBy, decreaseBy, reset, decrease, increase } =
    useCounter();
  const [input, setInput] = useState(1); // Default to 1
  const [openDocs, setOpenDocs] = useState(false);

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
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
              🎯 MỤC TIÊU BÀI TẬP 2
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 0.5 }}>
              Tạo một bộ đếm tiến lùi tương tác nâng cao. Cho phép người dùng nhập vào một giá trị tuỳ ý (Custom Amount) qua ô Input để cộng (hoặc trừ) chính xác số lượng đó vào giá trị đếm hiện tại.
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
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Interactive Counter
      </Typography>

      <Stack
        alignItems="center"
        spacing={3}
        direction={"row"}
        justifyContent="center"
        mb={2}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={decrease}
          sx={{ opacity: 0.7 }}
        >
          <RemoveIcon />
        </Button>
        <Typography
          variant="h3"
          sx={{ mb: 4, color: "primary.main", fontWeight: "bold" }}
        >
          {count}
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          onClick={increase}
          sx={{ opacity: 0.7 }}
        >
          <AddIcon />
        </Button>
      </Stack>

      <Stack spacing={2} sx={{ maxWidth: 300, mx: "auto" }}>
        <TextField
          fullWidth
          type="number"
          label="Custom Amount"
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />

        <Stack direction="row" spacing={1}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => increaseBy(input)}
          >
            Add
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => decreaseBy(input)}
          >
            Sub
          </Button>
        </Stack>

        <Button variant="outlined" color="inherit" onClick={reset}>
          Reset
        </Button>
      </Stack>
      <DocsDialog open={openDocs} onClose={() => setOpenDocs(false)} content={practice2Docs} title="Hướng Dẫn Practice 2" />
    </Box>
  );
}

export default Practice2;
