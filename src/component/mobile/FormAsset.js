import React from 'react'
import ButtonPrimaryMobile from './ButtonPrimaryMobile'
import InputMobile from './InputMobile'


export default function FormAsset() {
  return (
    <>
      <InputMobile placeholder='Nama Barang' type='text'/>
      <InputMobile placeholder='Harga' type='number'/>
      <InputMobile placeholder='Tanggal' type='date'/>
      <ButtonPrimaryMobile tittle='Tambah'/>
    </>
  )
}
