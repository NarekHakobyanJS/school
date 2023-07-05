import React from 'react';
import './HomeAboutDescription.css';
import {IoIosArrowDown} from "react-icons/io";
import { useState } from 'react';

const HomeAboutDescription = ({about}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const changePopup = () => setOpenPopup(prev => !prev)
  return (
    <div className='home-about-description-ac-block'>
    <div className='home-about-description-ac'>
        <h4 className='home-courses-card-title'>{about.title}</h4>
        <IoIosArrowDown onClick={changePopup}/>
    </div>
    {
          openPopup && <p className='home-about-description-text'>{about.body}</p>
        }
    </div>
  )
}

export default HomeAboutDescription