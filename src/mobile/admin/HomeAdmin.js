import React, {useState, useEffect } from 'react'
import { Box, Typography, List } from '@mui/material'
import Header from '../../component/mobile/Header'
import MainContent from '../../component/mobile/MainContent'
import { AdminMenu } from '../../helper/menudatas'
import Menu from '../../component/mobile/Menu'
import BottomContent from '../../component/mobile/BottomContent'
import FormTransaksi from '../../component/mobile/FormTransaksi'
import ListTransaksiAdmin from '../../component/mobile/ListTransaksiAdmin'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'


export default function HomeAdmin() {

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
      <Header tittle='Admin'/>
      <MainContent />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginInline: 20,
          marginBlock: 15,
        }}
      >
        {/* {AdminMenu.map((x, y) => {
          return <Menu key={y} icon={x.icon} tittle={x.name} disabled={x.disabled}
          onClick={()=>navigate(x.route)} 
          />;
        })} */}
        <BottomContent>
          <List sx={{ maxHeight: 600, position: "relative", overflow: "auto" }}>
          <Typography
            style={{
              fontSize: 22,
              lineHeight: "24px",
            }}
          >
            Tambah Transaksi
          </Typography>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} marginY={5}>
          <FormTransaksi/>
          </Box>
          <Typography
            style={{
              fontSize: 22,
              lineHeight: "24px",
            }}
          >
            List Transaksi
          </Typography>
          {kas.map((x, y) => {
            return (
              <ListTransaksiAdmin key={y} ket={x.keterangan} nominal={x.saldo} />
            );
          })}
          </List>
          {/* <List sx={{ maxHeight: 400, position: "relative", overflow: "auto" }}>
          </List> */}
        </BottomContent>
      </Box>
    </Box>
  )
}
