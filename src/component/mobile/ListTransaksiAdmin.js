import React, {useState, useEffect} from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";


export default function ListTransaksiAdmin({nominal='', tgl='', ket=''}) {
  const [status, setStatus] = useState('+')

  return (
    <Box sx={{marginBlock:3, display:'flex', justifyContent:'space-between', alignItems: 'center', borderBottom:1}}>
            <Box sx={{
              maxWidth:'75%',
            }}>
              <Typography>{tgl}</Typography>
              <Typography component={'p'} variant='body1' sx={{wordWrap:'break-word', width:140}}>{ket}</Typography>
            </Box>
            <Typography style={{
              width:'20%',
              textAlign:'center'
            }}>
              {nominal}
            </Typography>
            <Box style={{display:'flex',}}>
                <IconButton color='error'>
                    <DeleteIcon/>
                </IconButton>
                <IconButton color='primary'>
                    <ModeIcon />
                </IconButton>
            </Box>
    </Box>
  )
}
