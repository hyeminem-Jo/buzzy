// ImagesZoom > index.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Header = styled.header`
  height: 44px;
  background-color: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

  & button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`

const SlickWrapper = styled.div`
  position: relative;
  height: calc(100% - 44px);
  background-color: rgba(0,0,0,0.75);

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 45%;
    z-index: 11;
    &::before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 10%;
  }
  .slick-next {
    right: 10%;
  }
`
const ImgWrapper = styled.div`
  height: calc(100% - 44px);
  margin-top: 50px;
  .image {
    display: flex;
    justify-content: center;
    object-fit: contain !important;
    height: 100%;
    img {
      max-height: 500px !important;
      object-fit: contain !important;
    }
  }
`

const ImagesZoom = ({ images, onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Overlay>
      <Header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          {/* react-slick */}
          <Slick {...settings}>
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <div className='image'>
                  <img src={v.src} alt={v.src} />
                </div>
              </ImgWrapper>
            ))}
          </Slick>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ImagesZoom;