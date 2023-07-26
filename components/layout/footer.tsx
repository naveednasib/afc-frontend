import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/footer-logo.svg'

const footer = () => {
  return (
    <div className='footer-section'>
      <div className='container mx-auto'>
        <div className='footer-main'>
          <div className='footer-logo'>
            <Link href="/"> <Image
              src={Logo}
              alt="Picture of the author"
              width={202}
              height={349}
            /></Link>
          </div>

          <div className='footer-nav'>
            <h4>Competitions</h4>
            <ul>
              <li><Link href="/">National Teams</Link></li>
              <li><Link href="/">Club Competitions</Link></li>
              <li><Link href="/">Livescores</Link></li>
            </ul>
          </div>
          <div className='footer-nav'>
            <h4>The AFC</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">News </Link></li>
              <li><Link href="/">Media </Link></li>
              <li><Link href="/">Tickets  </Link></li>
              <li><Link href="/">Contact  </Link></li>
              <li><Link href="/">Privacy </Link></li>
            </ul>
          </div>
          <div className='footer-lop'>
            <h4>Stay in the loop</h4>
            <p>Join our mailing list to stay in the loop with our newest for sporting events</p>
            <div className='subscibe'>
              <input placeholder='Enter your email address..' />
              <button>Subscibe Now</button>
            </div>
          </div>
        </div>
        <div className='footer-copy'>
          <p>Copyright © 2023 AFC</p>
        </div>
      </div>
    </div>
  )
}


export default footer