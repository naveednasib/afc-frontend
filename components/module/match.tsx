import React, { Component } from 'react'
import Image from 'next/image'
import Man from '../../public/img/man-f.svg'

export class match extends Component {
  render() {
    return (
        <div className='match-section'>
    <div className='container mx-auto'>
      <div className='match-main'>
       <div className='lft'>
        <div className='highlights'>HIGHLIGHTS</div>
          <Image
            src={Man}
            alt="Picture of the author"
            width={659}
            height={533}
            />
       </div>
       <div className='rgt'>
           <h2>Match Highlights</h2>
           <p>Check out the top goal shots, goal keeper saves and much more at our media center</p>
           <button>see more</button>
        </div>

      </div>
      </div>
      </div>
    )
  }
}

export default match