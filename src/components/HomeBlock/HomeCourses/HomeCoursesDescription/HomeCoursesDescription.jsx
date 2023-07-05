import React, { useState } from 'react'
import './HomeCoursesDescription.css';
import {IoIosArrowDown} from "react-icons/io"
const HomeCoursesDescription = ({ courses }) => {
    const [openPopup, setOpenPopup] = useState(false)

    const changePopup = () => {
        setOpenPopup(prev => !prev)
    }

    return (
        <div className='home-courses-main'>
        <div className='home-courses-card'>
            <h4 className='home-courses-card-title'>{courses.title}</h4>
            <IoIosArrowDown onClick={changePopup}/>
        </div>
        {
            openPopup && <p className='home-courses-description'>{courses.description}</p>
           }
        </div>
        )
}

export default HomeCoursesDescription