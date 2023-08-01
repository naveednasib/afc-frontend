import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import starsline from '../../public/img/starslines.png'

export class banner extends Component {
    
  render() {
    return (
      <div className="bannersection">
         <h1 className='type'>AFC ASIAN CUP <br></br>2023</h1>
         <p>The 18th edition of the AFC Asian Cup,
            Hosted in Qatar from January 12th 
            to February 10th 2024.</p>
            <div className="banner-button flex gap-6">
                <button>Get Tickets</button>
                <button className="blank-button">Learn More</button>
            </div>
           <div className='mt-16'>
              <Image
              src={starsline}
              alt="Picture of the author"
              width={390}
              height={81}
              />
              <div className='text-[16px] sm:text-[18px]'><Link className='underline' href="/">Apply to Hayya,</Link> and get access to</div>
            </div>

      </div>
    )
  }
}

export default banner