import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePresentation from './components/HomeBlock/HomePresentation/HomePresentation';
import HomeCourses from './components/HomeBlock/HomeCourses/HomeCourses';
import HomeCenter from './components/HomeBlock/HomeCenter/HomeCenter';
import HomeTeatcher from './components/HomeBlock/HomeTeatcher/HomeTeatcher';
import HomeAbout from './components/HomeBlock/HomeAbout/HomeAbout';
import HomeContact from './components/HomeBlock/HomeContact/HomeContact';

function App() {
  const coursesRef = useRef(null);
  const centerRef = useRef(null);
  const teatcherRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollCoursesComponent = () => {
    coursesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollCenterComponent = () => {
    centerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTeatcherComponent = () => {
    teatcherRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollAboutComponent = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollContactComponent = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Header
        scrollCoursesComponent={scrollCoursesComponent}
        scrollCenterComponent={scrollCenterComponent}
        scrollTeatcherComponent={scrollTeatcherComponent}
        scrollAboutComponent={scrollAboutComponent}
        scrollContactComponent={scrollContactComponent}
      />
      <div className='main-app'>
        <HomePresentation />
        <HomeCourses ref={coursesRef}/>
        <HomeCenter ref={centerRef} />
        <HomeTeatcher ref={teatcherRef}/>
        <HomeAbout ref={aboutRef}/>
        <HomeContact ref={contactRef}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
