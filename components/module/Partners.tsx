import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import partners01 from '../../public/img/partners01.svg'
import partners02 from '../../public/img/partners02.svg'
import partners03 from '../../public/img/partners03.svg'
import partners04 from '../../public/img/partners04.svg'
import partners05 from '../../public/img/partners05.svg'
import partners06 from '../../public/img/partners06.svg'

export class Partners extends Component {
  render() {
    return (
      <div className='Partners-section'>
         <div className='container mx-auto'>
            <div className="heading">
            <h2>Our Partners</h2>
            <p>We&lsquo;ve had the pleasure of working with global established entities. <br></br>These are just some of them.</p>
            </div>
            <div className="Partnersboxes-main">
                <div className='flex justify-around mb-20'>
                    <div className="box">
                    <Link href="/">  <Image
                        src={partners01}
                        alt="Picture of the author"
                        width={149}
                        height={82}
                        /></Link>
                    </div>
                    <div className="box">
                    <Link href="/">   <Image
                        src={partners02}
                        alt="Picture of the author"
                        width={149}
                        height={82}
                        /></Link>
                    </div>   
                    <div className="box">
                    <Link href="/">   <Image
                    src={partners03}
                    alt="Picture of the author"
                    width={149}
                    height={82}
                    /></Link>
                    </div> 
                    <div className="box">
                    <Link href="/">  <Image
                        src={partners04}
                        alt="Picture of the author"
                        width={149}
                        height={82}
                        /></Link>
                    </div>
                </div> 
                <div className='flex justify-center gap-40'>
                    <div className="box">
                    <Link href="/">   <Image
                        src={partners05}
                        alt="Picture of the author"
                        width={149}
                        height={82}
                        /></Link>
                    </div>
                    <div className="box">
                    <Link href="/">  <Image
                        src={partners06}
                        alt="Picture of the author"
                        width={149}
                        height={82}
                        /></Link>
                    </div>
                </div>
                </div>
               
          

        </div>
      </div>
    )
  }
}

export default Partners