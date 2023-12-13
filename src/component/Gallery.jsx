import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { pictures } from '../pics';
import './gallery.css'

function Gallery() {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
        }  
  return (
    <>
      <div className="gallery">
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="Image" />
            <IoMdClose className='icon' onClick={()=>setModel(false)}/>
        </div>
        {
            pictures.map((pic, index) => {
                return (
                    <div className="pics" key={index}>
                        <img src={pic.src} style={{width: '100%'}} alt="image" onClick={()=>getImg(pic.src)} />
                    </div>
                )
            })
        }
      </div>
    </>
  );
}

export default Gallery