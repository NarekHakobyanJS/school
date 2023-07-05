import React, {useState, useEffect} from 'react'
import "./GlobalFunctions.css"
import {FiSun} from 'react-icons/fi'
import {BsCloudMoon} from  'react-icons/bs'
import {IoLanguageSharp} from 'react-icons/io5'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

const GlobalFunctions = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
  return (
    <div className='global-functions'>
        <span onClick={toggleTheme}>
            {
                theme === 'light' ?  <FiSun />  : <BsCloudMoon />
            }
        </span>
        <LanguageSwitcher />
        <IoLanguageSharp />
    </div>
  )
}

export default GlobalFunctions