import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Stack, Container, TextField } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          marginTop={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
          <h1>{count}</h1>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </Stack>
        <Stack>
          <Button variant="text" color="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Stack>
        {count < 0 && (
          <p style={{ color: "red", textAlign: "center" }}>Số âm rồi!</p>
        )}
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          marginTop={1}
        >
          <TextField
            type="number"
            onChange={(e) => setInput(Number(e.target.value))}
          />
          <Button
            variant="text"
            color="primary"
            onClick={() => setCount(input + count)}
          >
            Plus
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default App;
