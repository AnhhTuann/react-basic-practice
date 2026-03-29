import { useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
  Divider,
  Paper,
} from "@mui/material";
import { Counter, Practice1, Practice2, Practice3 } from "./features/lession1";
import CollapsibleSection from "./components/CollapsibleSection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#6366f1", // Indigo 500
          },
          secondary: {
            main: "#f43f5e", // Rose 500
          },
          background: {
            default: "#0f172a",
            paper: "#1e293b",
          },
        },
        shape: {
          borderRadius: 12,
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h4: {
            fontWeight: 700,
            letterSpacing: "-0.02em",
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 600,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", pb: 8 }}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            backdropFilter: "blur(8px)",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 800, color: "primary.main" }}
            >
              REACT PRACTICES
            </Typography>
            <Button color="inherit" size="small">
              Docs
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Stack spacing={4}>
            {/* Lessons Section */}
            <Box>
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Lessons & Practices
              </Typography>
              <Stack spacing={3}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 1,
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Counter />
                </Paper>
                <CollapsibleSection title="Practice 1 (Counter Hook)">
                  <Practice1 />
                </CollapsibleSection>
                <CollapsibleSection title="Practice 2 (Input handling)">
                  <Practice2 />
                </CollapsibleSection>
                <CollapsibleSection title="Practice 3 (Magic Clicker)">
                  <Practice3 />
                </CollapsibleSection>
              </Stack>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* Custom Interactive Practice Section */}
            <Box>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.8 }}>
                Interaction Playground
              </Typography>
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "background.paper",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3} alignItems="center">
                    <Typography variant="h6">
                      {" "}
                      Bạn đã click{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontSize: "1.5rem" }}
                      >
                        {count}
                      </Box>{" "}
                      lần
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: "100%", maxWidth: 400 }}
                    >
                      <TextField
                        fullWidth
                        type="number"
                        label="Số cộng thêm"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setInput(Number(e.target.value))}
                      />
                      <Button
                        variant="contained"
                        onClick={() => setCount(input + count)}
                        sx={{ px: 4 }}
                      >
                        Cộng dồn
                      </Button>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => setCount(count + 1)}
                        sx={{ px: 6, py: 1.5, fontSize: "1.1rem" }}
                      >
                        Click Me!
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => setCount(0)}
                        sx={{ opacity: 0.7 }}
                      >
                        Reset
                      </Button>
                    </Stack>

                    {/* Feedback Messages */}
                    <Box sx={{ mt: 2, textAlign: "center" }}>
                      {count === 0 && (
                        <Typography sx={{ opacity: 0.5 }}>
                          Chưa click lần nào
                        </Typography>
                      )}
                      {count < 0 && (
                        <Typography color="error">Số âm rồi!</Typography>
                      )}
                      {count > 0 && count <= 10 && (
                        <Typography color="success.main">
                          Bình thường 👍
                        </Typography>
                      )}
                      {count > 10 && count <= 20 && (
                        <Typography sx={{ color: "orange" }}>
                          Hơi nhiều rồi 😏
                        </Typography>
                      )}
                      {count > 20 && (
                        <Typography color="error" sx={{ fontWeight: "bold" }}>
                          🔥 Nghiện thật rồi 🔥
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
