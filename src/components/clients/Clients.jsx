import React from 'react'
import  { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import './Clients.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cleint1 from '../../assets/cleint1.png'
import cleint2 from '../../assets/cleint2.png'
import stars from '../../assets/stars.png'


const Clients = () => {
  return (
    <>
      <div className="clents">
          <div className="container">
                <div className="cleints__title">
                        <p>Here are our some of the best clients.</p>
                        <h2>What People Say About Us</h2>
                </div>
                    <Swiper
                 modules={[Navigation, Pagination ]}
                // navigation
                spaceBetween={50}
                slidesPerView={2}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                        <div className="clients__card">
                                <div className="card__left">
                                    <img src={cleint1} alt="" />     
                                </div>
                                <div className="card__right">
                                        <h2>Hamza Faizi</h2>
                                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                        <img className='stars' src={stars} alt="" />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="clients__card">
                        <div className="card__left">
                                    <img src={cleint2} alt="" />     
                                </div>
                                <div className="card__right">
                                        <h2>Hafiz Huzaifa</h2>
                                        <p>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                                        <img className='stars' src={stars} alt="" />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="clients__card">
                        <div className="card__left">
                                    <img src={cleint1} alt="" />     
                                </div>
                                <div className="card__right">
                                        <h2>Hamza Faizi</h2>
                                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                        <img className='stars' src={stars} alt="" />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="clients__card">
                        <div className="card__left">
                                    <img src={cleint2} alt="" />     
                                </div>
                                <div className="card__right">
                                        <h2>Hafiz Huzaifa</h2>
                                        <p>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                                        <img src={stars} alt="" />
                                </div>
                        </div>
                </SwiperSlide>
                </Swiper>

          </div>
      </div>
    </>
  )
}

export default Clients