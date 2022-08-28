import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Temuriylar } from '../../layouts/AdiblarDavri/Temuriylar/Temuriylar'
import { Jadid } from '../../layouts/AdiblarDavri/Jadid/Jadid'
import { Sovet } from '../../layouts/AdiblarDavri/Sovet/Sovet'
import { Mustaqillik } from '../../layouts/AdiblarDavri/Mustaqillik/Mustaqillik'
import "./kitoblar.scss"

export const Kitoblar = () => {
  return (
    <div className='books'>
      <Routes>
        <Route path='temuriylar-davri' element={<Temuriylar />} />
        <Route path='jadid-adabiyoti' element={<Jadid />} />
        <Route path='sovet-davri' element={<Sovet/>} />
        <Route path='mustaqillik-davri' element={<Mustaqillik />} />
      </Routes>
    </div>
  )
}
