import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function MainContent() {
  const dataCollectionRef = collection(db, "kas");
  const [kas, setKas] = useState([]);

  const pemasukan = (kas.reduce((x,y)=>x=x + y.pemasukan,0))
  const pengeluaran =(kas.reduce((x,y)=>x=x + y.pengeluaran,0))
  const saldo = pemasukan - pengeluaran;

  useEffect(() => {
    const getKas = async () => {
      const data = await getDocs(dataCollectionRef);
      setKas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKas();
  }, []);

  const rupiah =(number)=>{
    return new Intl.NumberFormat('id-ID', {
        style:'currency',
        currency:'IDR'
      }).format(number)
  } 

  return (
    <Box
      style={{
        height: 250,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#11998e",
        top: 30,
      }}
    >
      <Box marginTop={8}>
        <Typography
          style={{
            fontSize: 32,
            fontWeight: "600",
            lineHeight: "24px",
            textAlign: "center",
            color: "white",
          }}
        >
         {rupiah(saldo)}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            lineHeight: "24px",
            textAlign: "center",
            color: "white",
            marginTop: 10,
          }}
        >
          Saldo saat ini
        </Typography>
      </Box>
    </Box>
  );
}
