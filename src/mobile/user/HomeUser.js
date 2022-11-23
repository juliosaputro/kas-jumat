import { Box, Typography, Tabs, List } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../component/mobile/Header";
import MainContent from "../../component/mobile/MainContent";
import { UserMenu } from "../../helper/menudatas";
import Menu from "../../component/mobile/Menu";
import BottomContent from "../../component/mobile/BottomContent";
import Listtransaksi from "../../component/mobile/Listtransaksi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function HomeUser() {

    const navigate = useNavigate()

  const dataCollectionRef = collection(db, "kas");
  const [kas, setKas] = useState([]);

  useEffect(() => {
    const getKas = async () => {
      const data = await getDocs(dataCollectionRef);
      setKas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKas();
  }, []);


  return (
    <Box>
      <Header tittle="User"/>
      <MainContent />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginInline: 20,
          marginBlock: 35,
        }}
      >
        {UserMenu.map((x, y) => {
          // console.log(x.name, "name");
          return <Menu key={y} icon={x.icon} tittle={x.name} onClick={()=>navigate(x.route)} disabled={x.disabled}/>;
        })}
        <BottomContent>
          <Typography
            style={{
              fontSize: 22,
              lineHeight: "24px",
            }}
          >
            List Transaksi
          </Typography>
          <List sx={{ maxHeight: 400, position: "relative", overflow: "auto" }}>
            {kas.map((x, y) => {
              return (
                <Listtransaksi key={y} ket={x.keterangan} nominal={x.saldo} />
              );
            })}
          </List>
        </BottomContent>
      </Box>
    </Box>
  );
}
