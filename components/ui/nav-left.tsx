import React, { Component } from 'react'
import Link from 'next/link'



export class Navleft extends Component {
  render() {
    return (
      <div className='xl:block 2xl:block lg:block   md:block hidden'>
        <ul className="flex gap-20 ">
            <li className='active'><Link href="/">Home</Link></li>
            <li><Link href="/">News</Link></li>
            <li><Link href="/">Media Center</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navleft