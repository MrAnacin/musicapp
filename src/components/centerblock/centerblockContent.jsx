import Search from '../search/search'
import Filter from '../filter-by/filter'
import TrackList from '../tracklist/tracklist'
import Track from '../tracklist/track'

import styles from '../centerBlock/centerblock.module.css'
import { Outlet } from 'react-router-dom'

export default function CenterBlock() {
  return (
  
      <Outlet />

  )
}
