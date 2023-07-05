import React from 'react';
import GlobalFunctions from './GlobalFunctions/GlobalFunctions';
import "./Header.css";
import Navigation from './Navigation/Navigation';
import logo from "../../assets/img/logo.png"
import { NavLink } from 'react-router-dom';

const Header = ({ scrollCoursesComponent, scrollCenterComponent, scrollTeatcherComponent, scrollAboutComponent, scrollContactComponent }) => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <NavLink to="/">
          <img src={logo} width={30} />
        </NavLink>
      </div>
      <Navigation
        scrollCoursesComponent={scrollCoursesComponent}
        scrollCenterComponent={scrollCenterComponent}
        scrollTeatcherComponent={scrollTeatcherComponent}
        scrollAboutComponent={scrollAboutComponent}
        scrollContactComponent={scrollContactComponent}
      />
      <GlobalFunctions />
    </header>
  )
}

export default Header