import React, { forwardRef } from 'react'
import "./HomeTeatcher.css"
import HomeTeatcherSlider from './HomeTeatcherSlider/HomeTeatcherSlider'

const HomeTeatcher = ({}, ref) => {
    return (
        <div className='home-teatcher' ref={ref}>
            <h1 className='home-teatcher-title'>Մեր թիմը...</h1>
            <p className='home-teatcher-subtitle'>Մեր թիմի բարձր մասնագետների շնորհիվ դուք կհասն եք բարձրունքի</p>
            <div className='home-slider'>
            <HomeTeatcherSlider />
            </div>
        </div>
    )
}

export default forwardRef(HomeTeatcher)