import { Stack, Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increase, decrease } = useCounter();
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
        Lesson 1 - useState()
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "rgba(255,255,255,0.03)",
          p: 2,
          borderRadius: 4,
          display: "inline-flex",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={decrease}
          sx={{ minWidth: 50, height: 50, borderRadius: "50%" }}
        >
          <RemoveIcon />
        </Button>

        <Typography variant="h2" sx={{ width: 80, fontWeight: 800 }}>
          {count}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={increase}
          sx={{ minWidth: 50, height: 50, borderRadius: "50%" }}
        >
          <AddIcon />
        </Button>
      </Stack>
    </Box>
  );
}

export default Counter;
