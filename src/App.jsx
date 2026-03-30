import { useMemo, useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
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
  Lesson1,
  Lesson1Practices,
  Practice1,
  Practice2,
  Practice3,
} from "./features/lession1";
import CollapsibleSection from "./components/CollapsibleSection";
import "./App.css";
import { Lession2 } from "./features/lession2";
import DocsDialog from "./components/DocsDialog";
import buttonDocsContent from "../docs/ReactBasics.md?raw";

function App() {
  const [openDocs, setOpenDocs] = useState(false);
  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#06b6d4", // Cyan
          },
          secondary: {
            main: "#d946ef", // Fuchsia
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
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
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
              className="gradient-text"
              sx={{ fontWeight: 800, mr: 4 }}
            >
              REACT PRACTICES
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
              <Button
                component={Link}
                to="/lesson1"
                color={location.pathname === "/lesson1" ? "primary" : "inherit"}
                sx={{ opacity: location.pathname === "/lesson1" ? 1 : 0.7 }}
              >
                Lesson 1
              </Button>
              <Button
                component={Link}
                to="/lesson2"
                color={location.pathname === "/lesson2" ? "primary" : "inherit"}
                sx={{ opacity: location.pathname === "/lesson2" ? 1 : 0.7 }}
              >
                Lesson 2
              </Button>
            </Box>

            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => setOpenDocs(true)}
              sx={{ borderRadius: 4 }}
            >
              📖 Docs
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/lesson1" replace />} />
            
            <Route path="/lesson1" element={
              <Box>
                <Typography variant="h4" className="gradient-text" gutterBottom sx={{ mb: 3, width: "fit-content" }}>
                  Lessons 1 & Practices
                </Typography>
                <Stack spacing={3}>
                  <Paper sx={{ p: 1 }}>
                    <Lesson1 />
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
            } />

            <Route path="/lesson2" element={
              <Box>
                <Typography variant="h4" className="gradient-text" gutterBottom sx={{ mb: 3, width: "fit-content" }}>
                  Lessons 2 & Practices
                </Typography>
                <Stack spacing={3}>
                  <Paper sx={{ p: 1 }}>
                    <Lession2 />
                  </Paper>
                </Stack>
              </Box>
            } />
          </Routes>
        </Container>
      </Box>
      <DocsDialog 
        open={openDocs} 
        onClose={() => setOpenDocs(false)} 
        content={buttonDocsContent} 
        title="ReactJS Basic Docs" 
      />
    </ThemeProvider>
  );
}

export default App;
