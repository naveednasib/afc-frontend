import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import stadiums01 from '../../public/img/stadiums01.png'
import stadiums02 from '../../public/img/stadiums02.png'
import stadiums03 from '../../public/img/stadiums03.png'



export default class stadiums extends Component {
  render() {
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 1400,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
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
              arrows:false,
            },
          },
        ],
    };
    return (
      <div className="fans-section stadiums">
        <div className="heading">
           <h2>The Stadiums</h2>
           <p>Nine spectacular stadiums will welcome the tournament</p>
        </div>
        <Slider {...settings}>
          <div>
             <div className="stadiums-box">
                <Image
                src={stadiums01}
                alt="Picture of the author"
                width={327}
                height={452}
                />
                <div className="text">
                  <h2>Al-Janoub Stadium</h2>
                  <p>Description</p>
                </div>
             </div>
          </div>
          <div>
             <div className="stadiums-box">
                <Image
                src={stadiums02}
                alt="Picture of the author"
                width={327}
                height={452}
                />
                <div className="text">
                  <h2>Educational City Stadium</h2>
                  <p>Description</p>
                </div>
             </div>
          </div>
          <div>
             <div className="stadiums-box">
                <Image
                src={stadiums03}
                alt="Picture of the author"
                width={327}
                height={452}
                />
                <div className="text">
                  <h2>Ahmed Bin Ali Stadium</h2>
                  <p>Description</p>
                </div>
             </div>
          </div>
          <div>
             <div className="stadiums-box">
                <Image
                src={stadiums01}
                alt="Picture of the author"
                width={327}
                height={452}
                />
                <div className="text">
                  <h2>Al-Bait Stadium</h2>
                  <p>Description</p>
                </div>
             </div>
          </div>
          <div>
             <div className="stadiums-box">
                <Image
                src={stadiums02}
                alt="Picture of the author"
                width={327}
                height={452}
                />
                <div className="text">
                  <h2>Al-Janoub Stadium</h2>
                  <p>Description</p>
                </div>
             </div>
          </div>
        </Slider>
      </div>
    );
  }
}