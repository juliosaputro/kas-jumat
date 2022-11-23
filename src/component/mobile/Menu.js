import { Button, Typography } from "@mui/material";
import React from "react";

export default function Menu({ icon, onClick, disabled, tittle='' }) {
  return (
    <Button
    disabled={disabled}
      style={{
        backgroundColor: "white",
        width: 70,
        height: 70,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius:10,
        boxShadow:'-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)',
      }}
      onClick={onClick}
    >
      {icon}
      <Typography style={{
              textAlign:'center',
              fontSize:8,
              lineHeight:2
            }}>{tittle}</Typography>
    </Button>
  );
}
