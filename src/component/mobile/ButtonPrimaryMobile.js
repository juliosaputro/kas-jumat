import React from 'react'
import { Button } from '@mui/material'

export default function ButtonPrimaryMobile({tittle='', onClick, icon, disabled=false}) {
  return (
    <Button variant='contained' startIcon={icon} onClick={onClick} style={{
        width:300,
        height:47,
        borderRadius:45,
        backgroundColor:'teal',
        fontSize:18,
        lineHeight:18,
        fontWeight:'600',
        marginBlock:10
      }}>
        {tittle}
      </Button>
  )
}
