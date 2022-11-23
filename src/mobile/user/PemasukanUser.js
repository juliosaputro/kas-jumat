import { Box, Typography, Tabs, List } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../component/mobile/Header";
import MainContent from "../../component/mobile/MainContent";
import { UserMenu } from "../../helper/menudatas";
import Menu from "../../component/mobile/Menu";
import BottomContent from "../../component/mobile/BottomContent";
import Listtransaksi from "../../component/mobile/Listtransaksi";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function PemasukanUser() {

    const navigate = useNavigate()

  const dataCollectionRef = collection(db, "kas");
  const [kas, setKas] = useState([]);
//   console.log(kas, "datas");

  useEffect(() => {
    const getKas = async () => {
      const data = await (await getDocs(dataCollectionRef.where('pemasukan', '<', 0)));
    //   setKas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data, 'datas')
    };
    getKas();
  }, []);


  return (
    <Box>
      <Header />
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
          console.log(x.name, "name");
          return <Menu key={y} icon={x.icon} onClick={()=>navigate(x.route)} />;
        })}
        <BottomContent>
          <Typography
            style={{
              fontSize: 22,
              lineHeight: "24px",
            }}
          >
            List Pemasukan
          </Typography>
          {/* <List sx={{ maxHeight: 400, position: "relative", overflow: "auto" }}>
            {kas.map((x, y) => {
              return (
                <Listtransaksi key={y} ket={x.keterangan} nominal={x.saldo} />
              );
            })}
          </List> */}
        </BottomContent>
      </Box>
    </Box>
  );
}
