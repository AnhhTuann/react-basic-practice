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
import {
  Counter,
  Lesson1Practices,
  Practice1,
  Practice2,
  Practice3,
} from "./features/lession1";
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
                <CollapsibleSection title="Practices">
                  <Lesson1Practices />
                </CollapsibleSection>
              </Stack>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
