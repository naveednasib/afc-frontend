"use client"

import Banner from '../components/module/banner'
import Bannerslider from '../components/module/banner-slider'
import Latest from '../components/module/latest'
import Match from '../components/module/match'
import Videos from '../components/module/videos'
import Fans from '../components/module/fans'
import Partners from '../components/module/Partners'
import Stadiums from '../components/module/stadiums'

export default function Home() {
  
  return (
    <div>
      <Banner />
      <Bannerslider />
      <Stadiums />
      <Latest />
      <Match />
      <Videos />
      <Fans />
      <Partners />
    </div>
  )
}
