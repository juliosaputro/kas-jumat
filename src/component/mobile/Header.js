import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header({tittle=''}) {
  return (
    <Box
      style={{
        width: "100%",
        padding: 15,
        background: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Typography
        style={{
          fontSize: 24,
          fontWeight: "500",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        {tittle}
      </Typography>
    </Box>
  );
}
