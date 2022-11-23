import React, {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'


export default function Listtransaksi({nominal='', tgl='', ket=''}) {
  const [status, setStatus] = useState('+')

  return (
    <Box sx={{marginBlock:3, display:'flex', justifyContent:'space-between', alignItems: 'center', borderBottom:1}}>
            <Box sx={{
              maxWidth:'75%',
            }}>
              <Typography>{tgl}</Typography>
              <Typography component={'p'} variant='body1' sx={{wordWrap:'break-word'}}>{ket}</Typography>
            </Box>
            <Typography style={{
              width:'20%',
              textAlign:'center'
            }}>
              {nominal}
            </Typography>
    </Box>
  )
}
