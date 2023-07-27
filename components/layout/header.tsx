import React, { Component } from 'react'
import Navleft from '../ui/nav-left'
import Logo from '../ui/logo'
import Navright from '../ui/nav-rgt'
import Mobilenav from '../ui/mobile-nav'

const header = () => {
  return (
    <div className="header flex justify-center items-center gap-20 py-6">
      <Navleft />
      <Logo />
      <Navright />
      <Mobilenav/>
    </div>
  )
}

export default header