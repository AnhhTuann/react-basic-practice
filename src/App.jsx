import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Stack, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

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
              setCount(count + 1);
            }}
          >
            +
          </Button>
          <h1>{count}</h1>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default App;
