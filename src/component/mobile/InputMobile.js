import React from 'react'
import { InputBase } from '@mui/material'

export default function InputMobile({placeholder='', onChange, type=''}) {
  return (
    <>
      <InputBase type={type} placeholder={placeholder} style={{backgroundColor: 'whitesmoke', height:40, width:'80%', borderColor:'red', borderRadius:42, paddingInline:20, marginBlock:10}} onChange={onChange}/>
    </>
  )
}
