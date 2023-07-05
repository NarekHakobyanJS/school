import React, { forwardRef } from 'react'
import './HomeCenter.css'
import center from "../../../assets/img/teatcher.svg"
import { useTranslation } from 'react-i18next'

const HomeCenter = ({ }, ref) => {
    const { t } = useTranslation()
    return (
        <div className='home-center' ref={ref}>
            <h1 className='home-center-title'>{t("Center.title")}</h1>
            <p className='home-center-subtitle'>{t("Center.subscribe")}</p>
            <div className='home-center-block'>
                <div className='home-center-block-left'>
                    <img src={center} width={600} />
                </div>
                <div className='home-center-block-left'>
                    <div className='home-center-block-left'>
                        <h5>{t("Center.bodyTitle")}</h5>
                        <p>{t('Center.body')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(HomeCenter) 