import React, { Component } from 'react'
import Image from 'next/image'
import latest01 from '../../public/img/latest01.svg'
import latest02 from '../../public/img/latest02.svg'
import latest03 from '../../public/img/latest03.svg'
import latest04 from '../../public/img/latest04.svg'
import latest05 from '../../public/img/latest05.svg'

export class latest extends Component {
  render() {
    return (
     <div className='latest-section'>
      <div className='container mx-auto'>
       <div className='heading-main'>
        <div className='heading'>LATEST NEWS</div>
        <div className='selectmy'>
        <select name="Sort by" id="Sort by">
            <option value="sort">Sort by</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
        </select>
        </div>
       </div>
       <div className='pra'>Our latest news update</div>


     <div className='box-main'>
        <div className='bol-lft'>
           <div className='boxes'>
              <div className='img'>
                        <Image
                        src={latest01}
                        alt="Picture of the author"
                        width={343}
                        height={412}
                        />
              </div>
              <div className='text'>
                <h2>Japan Remains Asia’s Best</h2>
                <h4 className='date'>Thu, July 20, 2023</h4>
                <p>Four-time AFC Asian Cup champions, Japan stayed two spots ahead of Islamic Republic of Iran with Australia five spots further down in 27</p>
                <p>Korea Republic, at 28, also stayed in the spot they were in the previous update last month with Saudi Arabia..</p>
              </div>
           </div>
        </div>
        <div className='bol-rgt'>
          <div className='boxes'>
              <div className='img'>
                        <Image
                        src={latest02}
                        alt="Picture of the author"
                        width={344}
                        height={198}
                        />
              </div>
              <div className='text'>
                <h2>Vote for your All-time AFC</h2>
                <h4 className='date'>Thu, July 20, 2023</h4>
                <p>Fans can now view a shortlist of 42 contenders and select their all-time...</p>
              </div>
          </div>
          <div className='boxes'>
              <div className='img'>
                        <Image
                        src={latest05}
                        alt="Picture of the author"
                        width={344}
                        height={198}
                        />
              </div>
              <div className='text'>
                <h2>Vote for your All-time AFC</h2>
                <h4 className='date'>Thu, July 20, 2023</h4>
                <p>Fans can now view a shortlist of 42 contenders and select their all-time...</p>
              </div>
          </div>
          <div className='boxes'>
              <div className='img'>
                        <Image
                        src={latest04}
                        alt="Picture of the author"
                        width={344}
                        height={198}
                        />
              </div>
              <div className='text'>
                <h2>Vote for your All-time AFC</h2>
                <h4 className='date'>Thu, July 20, 2023</h4>
                <p>Fans can now view a shortlist of 42 contenders and select their all-time...</p>
              </div>
          </div>
          <div className='boxes'>
              <div className='img'>
                        <Image
                        src={latest03}
                        alt="Picture of the author"
                        width={344}
                        height={198}
                        />
              </div>
              <div className='text'>
                <h2>Vote for your All-time AFC</h2>
                <h4 className='date'>Thu, July 20, 2023</h4>
                <p>Fans can now view a shortlist of 42 contenders and select their all-time...</p>
              </div>
          </div>
        </div>

     </div>


    <button>Load More</button>




      </div>
      </div>
    )
  }
}

export default latest