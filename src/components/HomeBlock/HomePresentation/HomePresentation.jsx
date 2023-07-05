import React from 'react'
import './HomePresentation.css'
import homeIMG from '../../../assets/img/home.svg'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

const HomePresentation = () => {
    
    const {t} = useTranslation()

    return (
        <div className='home-presentation'>
            <div className='home-presentation-left'>
                <h1>
                    {t("Presentation.Slogan")}
                </h1>
                <div className='home-presentation-left-btns'>
                    <button className='go-to-lesson'>{t("Presentation.PresentationBTN")}</button>
                    <div className='home-presentation-left-social'>
                        <a href='https://www.facebook.com/ITartashat/' target='_blank'><BsFacebook /></a>
                        <a href='https://www.instagram.com/itartashat/?igshid=YmMyMTA2M2Y%3D'><GrInstagram /></a>
        
                    </div>
                </div>
            </div>
            <div className='home-presentation-right'>
                <img src={homeIMG} width={600}/>
            </div>
        </div>
    )
}

export default HomePresentation