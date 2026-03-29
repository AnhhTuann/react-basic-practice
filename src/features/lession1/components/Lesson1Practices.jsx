import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import useCounter from "../hooks/useCounter";
import { useState } from "react";
const Lesson1Practices = () => {
  const { count, increaseBy, decreaseBy, reset, decrease, increase } =
    useCounter();
  const [input, setInput] = useState(1); // Default to 1
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Stack
        spacing={3}
        alignItems="center"
        direction={"row"}
        justifyContent="center"
      >
        <Button variant="outlined" color="inherit" onClick={decrease}>
          <RemoveIcon />
        </Button>
        <Typography variant="h3">{count}</Typography>
        <Button variant="outlined" color="inherit" onClick={increase}>
          <AddIcon />
        </Button>
      </Stack>
      <Stack spacing={3} direction={"row"} justifyContent="center">
        <TextField
          fullWidth
          type="number"
          label="Input number"
          variant="outlined"
          security="small"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => decreaseBy(input)}
        >
          Minus
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => increaseBy(input)}
        >
          Plus
        </Button>
        <Button variant="outlined" color="inherit" onClick={reset}>
          Reset
        </Button>
      </Stack>
      <Button variant="outlined" color="inherit">
        Click me
      </Button>
      {count === 0 && (
        <Typography variant="subtitle1" color="error">
          Counter is at zero!
        </Typography>
      )}
      {count < 0 && (
        <Typography variant="subtitle1" color="error">
          Counter is negative!
        </Typography>
      )}
      {count > 10 && (
        <Typography variant="subtitle1" color="primary">
          Wow, ${count} lần rồi! Hơi sung sức đấy! 🔥
        </Typography>
      )}
      {count > 20 && (
        <Typography variant="subtitle1" color="primary">
          Đỉnh cao! ${count} lần luôn! Nghiện thật rồi!
        </Typography>
      )}
    </Box>
  );
};

export default Lesson1Practices;
