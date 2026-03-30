import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

export default function DocsDialog({ open, onClose, title = "Docs", content = "" }) {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "rgba(15, 23, 42, 0.75) !important",
        }
      }}
    >
      <DialogTitle className="gradient-text" sx={{ fontWeight: "bold", borderBottom: 1, borderColor: "divider", fontSize: "1.5rem" }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ py: 3 }}>
        <Box
          sx={{
            "& h1, h2, h3, h4, h5, h6": {
              mt: 2,
              mb: 1,
              fontWeight: 600,
              color: "primary.main",
            },
            "& pre": {
              backgroundColor: "background.default",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              border: "1px solid",
              borderColor: "divider",
            },
            "& code": {
              fontFamily: "monospace",
              backgroundColor: "rgba(255,255,255,0.1)",
              px: 0.5,
              py: 0.2,
              borderRadius: 0.5,
            },
            "& pre code": {
              backgroundColor: "transparent",
              p: 0,
            },
            "& ul": {
              pl: 3,
            },
          }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </DialogContent>
      <DialogActions sx={{ borderTop: 1, borderColor: "divider" }}>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
