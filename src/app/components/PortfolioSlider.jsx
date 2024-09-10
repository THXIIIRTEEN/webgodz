import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import portfolio from "../components/portfolio-slider.json";
import PortfolioBlock from './Portfolio-block';

export default function PortfolioSlider () {

    const [ show, setShow ] = useState(false)

    const swiperRef = useRef();

    const variants = {
        offscreen: {
          opacity: 0, 
          y: '10%'
        },
        onscreen: {
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    return (
        <div className='portfolio-list'>
        <Swiper
          slidesPerView={2}
          onSwiper={(swiper) => {swiperRef.current = swiper}}
          modules={[Pagination, Navigation]}
          navigation
          className='portfolio-swiper'
          loop={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
              loop: true,
              centeredSlides: true,
              spaceBetween: 100
            },

            600: {
              spaceBetween: 205,
              slidesPerView: 2,
              centeredSlides: false,
              loop: true
            }
          }}
        >   
            {   portfolio.map((port) => {
                return (
                    <SwiperSlide key={port.id} className='portfolio-block'>
                        <PortfolioBlock {...port}></PortfolioBlock>
                    </SwiperSlide>
                )
                })    
            }
        </Swiper>
        <div className='swiper-buttons_block'>
            <button onClick={() => swiperRef.current.slidePrev()} className="portfolio_arrow-button">{'<'}</button>
            <button onClick={() => swiperRef.current.slideNext()} className="portfolio_arrow-button">{'>'}</button>
        </div>
        </div>
    );    
}