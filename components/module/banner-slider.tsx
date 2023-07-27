import React, { Component } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import slier01 from '../../public/img/slier01.svg'
import slier02 from '../../public/img/slier02.svg'
import slier03 from '../../public/img/slier03.svg'
import slier04 from '../../public/img/slier04.svg'
import slier05 from '../../public/img/slier05.svg'
import slier06 from '../../public/img/slier06.svg'

export class Bannerslider extends Component {
  render() {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1400,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  centerMode: false,
                  infinite: false,
                  
                },
              },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                centerMode: false,
                infinite: false,
                
              },
            },
          ],
      };
    return (
    <div className='upcoming-section'>
        <Slider {...settings}>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier01}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>FRIDAY, JANUARY 12</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier02}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>QFC</div>
            <div className='time'>19:30</div>
            <div className='afa'>LFA</div>
            </div>
            <div className='text'>AL BAYT STADIUM <br></br>(AL KHOR)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier03}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP B</div>
                </div>
                <div> <Image
                src={slier04}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>AFA</div>
            <div className='time'>14:30</div>
            <div className='afa'>IFA</div>
            </div>
            <div className='text'>AHMAD BIN ALI STADIUM <br></br> (AL RAYYAN)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier05}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier06}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>CFA</div>
            <div className='time'>17:30</div>
            <div className='afa'>TFC</div>
            </div>
            <div className='text'>ABDULLAH BIN NASSER BIN <br></br>KHALIFA STADIUM (DOHA)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier01}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier06}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>CFA</div>
            <div className='time'>17:30</div>
            <div className='afa'>TFC</div>
            </div>
            <div className='text'>ABDULLAH BIN NASSER BIN <br></br>KHALIFA STADIUM (DOHA)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier01}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>FRIDAY, JANUARY 12</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier02}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>QFC</div>
            <div className='time'>19:30</div>
            <div className='afa'>LFA</div>
            </div>
            <div className='text'>AL BAYT STADIUM <br></br>(AL KHOR)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier03}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP B</div>
                </div>
                <div> <Image
                src={slier04}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>AFA</div>
            <div className='time'>14:30</div>
            <div className='afa'>IFA</div>
            </div>
            <div className='text'>AHMAD BIN ALI STADIUM <br></br> (AL RAYYAN)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier05}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier06}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>CFA</div>
            <div className='time'>17:30</div>
            <div className='afa'>TFC</div>
            </div>
            <div className='text'>ABDULLAH BIN NASSER BIN <br></br>KHALIFA STADIUM (DOHA)</div>
        </div>
        <div className='upcoming-main'>
            <div className='upcoming-box'>
            <h2>Upcoming Matches</h2>
            </div>
            <div className='upcoming-logo'>
            <div> <Image
                src={slier01}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
                <div>
                    <div className='month'>SATURDAY, JANUARY 13</div>
                    <div className='group'>GROUP STAGE - GROUP A</div>
                </div>
                <div> <Image
                src={slier06}
                alt="Picture of the author"
                width={44}
                height={45}
                /></div>
            </div>
            <div className='upcoming-afa'>
            <div className='afa'>CFA</div>
            <div className='time'>17:30</div>
            <div className='afa'>TFC</div>
            </div>
            <div className='text'>ABDULLAH BIN NASSER BIN <br></br>KHALIFA STADIUM (DOHA)</div>
        </div>
      </Slider>
    </div>
    )
  }
}

export default Bannerslider