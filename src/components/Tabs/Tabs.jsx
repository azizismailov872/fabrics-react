import React from 'react'
import { Link, useMatch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../index.css'

const Tabs = ({ tabsList }) => {
    const active = 'mr-4 font-medium border-b-2 border-b-black-100 dark:border-b-secondary-purple-dark text-black-100 dark:text-secondary-purple-dark transition-colors duration-300'

    const styles = 'mr-4 mb-2 font-regular text-black-40 dark:text-primary-light whitespace-nowrap';


    return (
        <div className='w-full mb-4'>
            <div className="mobile block md:hidden w-full">
                {
                    tabsList?.length && (
                        <Swiper
                            spaceBetween={10}
                            slidesPerView="auto"
                        >
                            {
                                tabsList.map(tab => (
                                    <SwiperSlide key={tab.id} style={{ width: 'auto' }}>
                                        <Link className={useMatch(tab.link) ? active : styles} to={tab.link}>{tab.title}</Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                }

            </div>
            <div className="desktop md:flex hidden flex-wrap">
                {
                    tabsList?.length && tabsList.map(tab => (
                        <Link key={tab.id} className={useMatch(tab.link) ? active : styles} to={tab.link}>{tab.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs