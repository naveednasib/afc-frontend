import React, { Component } from 'react'
import Image from 'next/image'
import Videos01 from '@/public/img/videos01.svg';
import Videos02 from '@/public/img/videos02.svg';
import Videos03 from '@/public/img/videos03.svg';
// import Videos01 from '../../public/img/videos01.svg'
// import Videos02 from '../../public/img/videos02.svg'
// import Videos03 from '../../public/img/videos03.svg'
export class videos extends Component {
  render() {
    return (
      <div className='videos-section'>
        <div className='container mx-auto'>
          <div className='heading'>
            <h1>Latest Videos</h1>
            <p>Our latest videos update</p>
          </div>

          <div className='boxes-main'>
            <div className='box'>
              <Image
                src={Videos01}
                alt="Picture of the author"
                width={343}
                height={210}
              />
              <div className='text'>
                <div className='date'>Fri, May 12, 2023</div>
                <p>#AsianCup2023
                  Group A
                  Coach Reactions</p>
              </div>
            </div>
            <div className='box'>
              <Image
                src={Videos02}
                alt="Picture of the author"
                width={343}
                height={210}
              />
              <div className='text'>
                <div className='date'>Fri, May 12, 2023</div>
                <p>#AsianCup2023
                  Group A
                  Coach Reactions</p>
              </div>
            </div>
            <div className='box'>
              <Image
                src={Videos03}
                alt="Picture of the author"
                width={343}
                height={210}
              />
              <div className='text'>
                <div className='date'>Fri, May 12, 2023</div>
                <p>#AsianCup2023
                  Group A
                  Coach Reactions</p>
              </div>
            </div>

          </div>
          <button>Learn More</button>

        </div>
      </div>
    )
  }
}

export default videos