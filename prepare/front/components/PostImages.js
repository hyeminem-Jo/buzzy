import React, {useCallback, useState} from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Images = styled.div`
  margin-bottom: 20px;
  height: 350px;
  cursor: pointer;
  
  .image {
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .one {
    width: 100%;
  }

  .two {
    display: flex;
    height: 100%;
    
    .image {
      width: 50%;
    }
  }
  
  .else {
    display: flex;
    height: 100%;
    
    .left {
      width: 50%;
    }
    
    .right {
      width: 50%;
      .image {
        height: 50%;
      }
      
      .more {
        position: relative;
        
        button {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color:rgba(0, 0, 0, 0.65);
          color: #fff;
          font-size: 19px;
        }
      }
    }
  }
`

const PostImages = ({ images }) => {
  const [zoomOn, setZoomOn] = useState(false)

  const zoom = useCallback(() => {
    setZoomOn(true)
  }, [])

  if (images.length === 1) {
    return (
      <Images>
        <div className="image one">
          <img src={images[0].src} alt={images[0].src} onClick={zoom} />
        </div>
      </Images>
    );
  }

  if (images.length === 2) {
    return (
      <Images>
        <div className="two" onClick={zoom} >
          <div className="image">
            <img src={images[0].src} alt={images[0].src} />
          </div>
          <div className="image">
            <img src={images[1].src} alt={images[1].src} />
          </div>
        </div>
      </Images>
    );
  }

  return (
    <Images>
      <div className="else" onClick={zoom} >
        <div className="image left">
          <img src={images[0].src} alt={images[0].src}/>
        </div>
        <div className="right">
          <div className="image">
            <img src={images[1].src} alt={images[1].src} />
          </div>
          <div className="image more">
            <img src={images[2].src} alt={images[2].src} />
            <button className="btn-more">
              + {images.length - 2}개의 사진 더보기
            </button>
          </div>
        </div>
      </div>
    </Images>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages;