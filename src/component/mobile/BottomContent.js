import { Box } from '@mui/material'
import React from 'react'

export default function BottomContent({children}) {
  return (
    <Box style={{
      flex:1,
        backgroundColor:'white',
        // height:500, (for kas)
         height:620,
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
