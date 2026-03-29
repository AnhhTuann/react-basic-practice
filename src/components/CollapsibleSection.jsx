import { useState } from "react";
import { Box, Typography, Collapse, Paper, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CollapsibleSection = ({ title, children, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Paper
      variant="outlined"
      sx={{
        overflow: "hidden",
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        borderColor: "rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          borderBottom: isExpanded ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <IconButton size="small" color="primary">
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isExpanded}>
        <Box sx={{ p: 1 }}>{children}</Box>
      </Collapse>
    </Paper>
  );
};

export default CollapsibleSection;
