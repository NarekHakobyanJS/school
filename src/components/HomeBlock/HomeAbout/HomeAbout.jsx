import React, { forwardRef } from 'react'
import "./HomeAbout.css"
import homeAbout from "../../../assets/img/about.svg";
import HomeAboutDescription from './HomeAboutDescription/HomeAboutDescription';

const aboutData = [
  {id : 1, title : "Տարիքային սահմանափակում չկա", body : "Տարիքային սահմանափակում չկա"},
  {id : 1, title : "Տարիքային սահմանափակում չկա", body : "Տարիքային սահմանափակում չկա"},
  {id : 1, title : "Տարիքային սահմանափակում չկա", body : "Տարիքային սահմանափակում չկա"},
]

const HomeAbout = ({}, ref) => {
  return (
    <div className='home-about' ref={ref}>
        <h1 className='home-about-title'>Ինչու սովր էլ մեզ մոտ...</h1>
        <p className='home-about-subtitle'>Մի քան առավելութուն մեր մասին</p>
        <div className='home-about-description'>
            <div className='home-about-description-left'>
              {
                aboutData.map(about => <HomeAboutDescription key={about.id} about={about}/>)
              }
            </div>
            <div className='home-about-description-right'>
                <img src={homeAbout} width={600}/>
            </div>
        </div>
    </div>
  )
}

export default forwardRef(HomeAbout)