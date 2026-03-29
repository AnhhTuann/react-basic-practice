import { Stack, Button, Typography, Box, Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useCounter from "../hooks/useCounter";

function Practice1() {
  const { count, increase, decrease, reset } = useCounter();
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Practice 1
      </Typography>

      <Stack spacing={3} alignItems="center">
        <Stack direction="row" spacing={3} alignItems="center">
          <Button
            variant="outlined"
            color="inherit"
            onClick={decrease}
            sx={{ opacity: 0.7 }}
          >
            <RemoveIcon />
          </Button>

          <Badge
            badgeContent={count < 0 ? "Negative" : null}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, minWidth: 60 }}>
              {count}
            </Typography>
          </Badge>

          <Button variant="outlined" color="primary" onClick={increase}>
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
    </Box>
  );
}

export default Practice1;
