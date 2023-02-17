import React from 'react'
import Carousol from '../carousol/carousol'
import ads from '../../assets/images/ads3.jpg'
import ads2 from '../../assets/images/ads2.webp'
import ads1 from '../../assets/images/ads1.jpg'
import classes from './advert.module.css'
import { advert } from '../../constant/index'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const list = [
    {
        image: ads
    },
    {
        image: ads2
    },
    {
        image: ads1
    },
]
const Advert = () => {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.carousel}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            advert.map((items, i) => (
                                <SwiperSlide>
                                    <Carousol {...items} key={i} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={classes.grid}>
                    {
                        list.map((items, i) => (
                            <li key={i}>
                                <img src={items.image} alt="" />
                            </li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Advert;