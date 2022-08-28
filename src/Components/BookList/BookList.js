import React from 'react'
import { Jadid } from '../../layouts/KitoblarDavri/Jadid/Jadid'
import { Mustaqillik } from '../../layouts/KitoblarDavri/Mustaqillik/Mustaqillik'
import { Sovet } from '../../layouts/KitoblarDavri/Sovet/Sovet'
import { Temuriylar } from '../../layouts/KitoblarDavri/Temuriylar/Temuriylar'

export const BookList = ({id}) => {
  if(id == 1) {
    return <Temuriylar />
  } else if(id == 2) {
    return <Jadid />
  } else if(id == 3) {
    return <Sovet />
  } else {
    return <Mustaqillik />
  }
}
