import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../images/slider-badag.jpg'
import img2 from '../images/slider-badging.jpg'
import img3 from '../images/slider-scale.jpg'
import img4 from '../images/slider-scales.jpg'
import styled from '@emotion/styled';


const Wrap = styled('div')({
    '& img': {
        border: '4px solid transparent',
        '&:hover': {
            border: '3px solid rgba(294,249,249,0.8) '
        }
    }
})

const ImgSlider = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} style={{ overflow: 'visible' }}>
            <Wrap>
                <img src={img1} style={{ height: '100%', width: '100%', borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
            </Wrap>
            <Wrap>
                <img src={img2} style={{ height: '100%', width: '100%', borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
            </Wrap>
            <Wrap>
                <img src={img3} style={{ height: '100%', width: '100%', borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
            </Wrap>
            <Wrap>
                <img src={img4} style={{ height: '100%', width: '100%', borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
            </Wrap>

        </Slider>
    )
}

export default ImgSlider
