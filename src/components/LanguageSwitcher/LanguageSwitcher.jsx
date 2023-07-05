import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {

    const {i18n} = useTranslation()

    const switcher = (lng) => () => {
        i18n.changeLanguage(lng)
    }
  return (
    <div>
        <button onClick={switcher('en')}>en</button>
        <button onClick={switcher('am')}>am</button>
    </div>
  )
}

export default LanguageSwitcher