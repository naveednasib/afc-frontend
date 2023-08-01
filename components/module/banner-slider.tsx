import React, { Component } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import Stadiums from '../../public/img/Stadiums.png'
import transportation from '../../public/img/transportation.png'
import accommodation from '../../public/img/accommodation.png'
import healthInsurance from '../../public/img/healthInsurance.png'
import slier05 from '../../public/img/slier05.svg'
import slier06 from '../../public/img/slier06.svg'

export class Bannerslider extends Component {
  render() {
    const settings = {
        dots: false,
        arrows:false,
        speed: 1400,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  centerMode: false,
                
                  
                },
              },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                centerMode: false,
             
                
              },
            },
          ],
      };
    return (
        <div className='container mx-auto'>
            <div className='upcoming-section'>
                <Slider {...settings}>
                <div className='upcoming-main'>
                  <div className='upcoming-img'>
                      <Image
                        src={Stadiums}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                        />
                    </div>
                    <div className='upcoming-box'>
                       <h2>Stadiums</h2>
                    </div>
                   
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est id est laoreet vehicula et nec justo.</div>
                </div>
                <div className='upcoming-main'>
                    
                    <div className='upcoming-img'>
                      <Image
                        src={transportation}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                        />
                    </div>
                    <div className='upcoming-box'>
                       <h2>Transportation</h2>
                    </div>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est id est laoreet vehicula et nec justo.</div>
                </div>
                <div className='upcoming-main'>
                    
                    <div className='upcoming-img'>
                      <Image
                        src={accommodation}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                        />
                    </div>
                    <div className='upcoming-box'>
                       <h2>Accommodation</h2>
                    </div>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est id est laoreet vehicula et nec justo.</div>
                </div>
                <div className='upcoming-main'>
                   
                    <div className='upcoming-img'>
                      <Image
                        src={healthInsurance}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                        />
                    </div>
                    <div className='upcoming-box'>
                       <h2>Health Insurance</h2>
                    </div>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est id est laoreet vehicula et nec justo.</div>
                </div>
                <div className='upcoming-main'>
                  <div className='upcoming-img'>
                      <Image
                        src={Stadiums}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                        />
                    </div>
                    <div className='upcoming-box'>
                       <h2>Stadiums</h2>
                    </div>
                   
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est id est laoreet vehicula et nec justo.</div>
                </div>
              
               
              
               </Slider>
            </div>
        </div>
    )
  }
}

export default Bannerslider