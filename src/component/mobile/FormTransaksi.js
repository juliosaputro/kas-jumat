import React from 'react'
import ButtonPrimaryMobile from './ButtonPrimaryMobile'
import InputMobile from './InputMobile'

export default function FormTransaksi() {
  return (
    <>
      <InputMobile placeholder='Pemasukan' type='number'/>
      <InputMobile placeholder='Pengeluaran' type='number'/>
      <InputMobile placeholder='Tanggal' type='date'/>
      <InputMobile placeholder='Keterangan' type='text'/>
      <ButtonPrimaryMobile tittle='Tambah'/>
    </>
  )
}
