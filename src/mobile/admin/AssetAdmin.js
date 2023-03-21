import React, {useState, useEffect } from 'react'
import { Box, Typography, List } from '@mui/material'
import Header from '../../component/mobile/Header'
import MainContent from '../../component/mobile/MainContent'
import { AdminMenu } from '../../helper/menudatas'
import Menu from '../../component/mobile/Menu'
import BottomContent from '../../component/mobile/BottomContent'
import FormAsset from '../../component/mobile/FormAsset'
import { useNavigate } from 'react-router-dom'

export default function AssetAdmin() {
    const navigate = useNavigate()
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
      {AdminMenu.map((x, y) => {
        return <Menu key={y} icon={x.icon} tittle={x.name} disabled={x.disabled}
        onClick={()=>navigate(x.route)} 
        />;
      })}
      <BottomContent>
        <List sx={{ maxHeight: 400, position: "relative", overflow: "auto" }}>
        <Typography
          style={{
            fontSize: 22,
            lineHeight: "24px",
          }}
        >
          Tambah Asset
        </Typography>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} marginY={5}>
        <FormAsset/>
        </Box>
        {/* <Typography
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
        })} */}
        </List>
      </BottomContent>
    </Box>
  </Box>
  )
}
