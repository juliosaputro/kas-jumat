import { Box } from '@mui/material'
import React from 'react'

export default function BottomContent({children}) {
  return (
    <Box style={{
        backgroundColor:'white',
        height:500,
        width:'100%',
        position:'absolute',
        bottom:0,
        left:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    }}>
      {children}
    </Box>
  )
}
