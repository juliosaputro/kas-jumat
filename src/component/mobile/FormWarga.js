import React from 'react'
import ButtonPrimaryMobile from './ButtonPrimaryMobile'
import InputMobile from './InputMobile'

export default function FormWarga() {
  return (
    <>
      <InputMobile placeholder='Nama' type='text'/>
      <InputMobile placeholder='Jenis Kelamin' type='Text'/>
      <InputMobile placeholder='Tanggal Lahir' type='date'/>
      <ButtonPrimaryMobile tittle='Tambah'/>
    </>
  )
}
