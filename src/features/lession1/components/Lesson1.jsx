import { useState } from "react";
import { Stack, Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCounter from "../hooks/useCounter";
import DocsDialog from "../../../components/DocsDialog";
import useEffectDocsContent from "../../../../docs/useEffect.md?raw";


function Lesson1() {
  const { count, increase, decrease } = useCounter();
  const [openDocs, setOpenDocs] = useState(false);

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
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h5" className="gradient-text" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', sm: '1.5rem' }, textAlign: 'center' }}>
          Lesson 1 - useState()
        </Typography>
        <Button 
          variant="contained" 
          size="small" 
          onClick={() => setOpenDocs(true)}
          sx={{
            background: 'linear-gradient(45deg, #06b6d4, #d946ef)',
            color: 'white',
            boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
            borderRadius: '20px',
            textTransform: 'none',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.05)' }
          }}
        >
          📖 Docs
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
          p: { xs: 2, sm: 3 },
          borderRadius: 6,
          display: "inline-flex",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 15px 40px -10px rgba(6, 182, 212, 0.4)",
            borderColor: "rgba(6, 182, 212, 0.3)"
          }
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={decrease}
          sx={{ 
            minWidth: 50, height: 50, borderRadius: "50%", 
            transition: '0.2s', '&:hover': { background: "rgba(6, 182, 212, 0.2)", transform: 'scale(1.1)' } 
          }}
        >
          <RemoveIcon />
        </Button>

        <Typography variant="h2" className="gradient-text" sx={{ width: { xs: 50, sm: 80 }, fontSize: { xs: '2.5rem', sm: '3.75rem' }, fontWeight: 900, mb: 0 }}>
          {count}
        </Typography>

        <Button
          variant="contained"
          onClick={increase}
          sx={{ 
            minWidth: 50, height: 50, borderRadius: "50%", 
            background: 'linear-gradient(45deg, #06b6d4, #3b82f6)', 
            boxShadow: '0 4px 10px rgba(6,182,212,0.3)',
            transition: '0.2s', '&:hover': { transform: 'scale(1.1)' } 
          }}
        >
          <AddIcon />
        </Button>
      </Stack>

      <DocsDialog 
        open={openDocs} 
        onClose={() => setOpenDocs(false)} 
        content={useEffectDocsContent} 
        title="useEffect Hook Docs" 
      />
    </Box>
  );
}

export default Lesson1;
