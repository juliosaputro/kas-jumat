import React from 'react'
import { Button } from '@mui/material'

export default function ButtonPrimaryWeb({tittle='', onClick, icon, disabled=false}) {
  return (
    <Button disabled={disabled} variant='contained' startIcon={icon} onClick={onClick} style={{
        width:159,
        height:54,
        borderRadius:45,
        backgroundColor:'#16ABF8',
        fontSize:18,
        lineHeight:27,
        fontWeight:'600',
      }}>
        {tittle}
      </Button>
  )
}
