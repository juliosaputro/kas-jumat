import React from 'react'
import ButtonPrimaryMobile from './ButtonPrimaryMobile'
import InputMobile from './InputMobile'

export default function FormInformasi() {
  return (
    <>
      <InputMobile placeholder='Informasi' type='text'/>
      <InputMobile placeholder='Tanggal Pelaksanaan' type='date'/>
      <ButtonPrimaryMobile tittle='Tambah'/>
    </>
  )
}
