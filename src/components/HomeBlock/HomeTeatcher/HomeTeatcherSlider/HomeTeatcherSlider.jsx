import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y} from 'swiper'
import './HomeTeatcherSlider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const teatcherData = [
    {id : 1, name : "Serine", position : "director", imgUrl : './team/Serine1.png'},
    {id : 2, name : "Narek", position : "React teatcher", imgUrl : './team/narek.jpg'},
    {id : 3, name : "Gevor", position : "Js teatcher", imgUrl : './team/Gevorg.jpg'},
    {id : 4, name : "Vahe", position : "Js teatcher", imgUrl : './team/Vahe1.png'},
    {id : 5, name : "Katrine", position : "English Teatcher", imgUrl : './team/Katarina.jpg'},
]

const HomeTeatcherSlider = () => {
  return (
    <Swiper
      modules={[ Pagination, Scrollbar, Autoplay, A11y]}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={3}
      //onSlideChange={() => console.log('slide change')}
      //onSwiper={(swiper) => console.log(swiper)}
    >
      {
        teatcherData.map(teatcher => <SwiperSlide key={teatcher.id} className="slide">
            <div className='slider-block'>
                <img className='teatcher-img' src={teatcher.imgUrl} />
                <div className='teatcher-description'>
                  <h3>{teatcher.name}</h3>
                  <p>{teatcher.position}</p>
                </div>
            </div>
        </SwiperSlide>)
      }
    </Swiper>
  );
};

export default HomeTeatcherSlider