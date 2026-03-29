import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import useCounter from "../hooks/useCounter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Practice2() {
  const { count, increaseBy, decreaseBy, reset, decrease, increase } =
    useCounter();
  const [input, setInput] = useState(1); // Default to 1

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
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
    </Box>
  );
}

export default Practice2;
