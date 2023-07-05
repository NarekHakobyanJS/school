import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Navigation.css";

const Navigation = ({ scrollCoursesComponent, scrollCenterComponent, scrollTeatcherComponent, scrollAboutComponent, scrollContactComponent }) => {

  const { t } = useTranslation()
  return (
    <nav className='navigation'>
      <NavLink to="/" onClick={scrollCoursesComponent}> {t('Navigation.Courses')}</NavLink>
      <NavLink to="/" onClick={scrollCenterComponent}>{t('Navigation.AboutUs')}</NavLink>
      <NavLink to="/" onClick={scrollTeatcherComponent}>{t('Navigation.Teachers')}</NavLink>
      <NavLink to="/" onClick={scrollAboutComponent}>{t('Navigation.Advantages')}</NavLink>
      <NavLink to="/" onClick={scrollContactComponent}>{t('Navigation.Contact')}</NavLink>
    </nav>
  )
}

export default Navigation