import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/img/logo.svg'

export class logo extends Component {
  render() {
    return (
      <div className='logo'>
         <Link href="/">  <Image
            src={Logo}
            alt="Picture of the author"
            width={183}
            height={76}
            /></Link>
      </div>
    )
  }
}

export default logo