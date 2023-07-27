import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import fans01 from '../../public/img/fans01.png'
import fans02 from '../../public/img/fans02.png'
import fans03 from '../../public/img/fans03.png'
import fans04 from '../../public/img/fans04.png'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 400,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
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
      <div className="fans-section">
        <div className="heading">
           <h2>FANS VIEW</h2>
           <p>Our fans view from the field</p>
        </div>
        <Slider {...settings}>
          <div>
           <div>
            <Image
            src={fans01}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans02}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans03}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans04}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans01}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans02}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans03}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
          <div>
           <div>
            <Image
            src={fans04}
            alt="Picture of the author"
            width={254}
            height={407}
            />
             </div>
          </div>
        </Slider>
      </div>
    );
  }
}