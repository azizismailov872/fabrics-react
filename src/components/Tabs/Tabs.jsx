import React from 'react'
import { Link, useMatch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../index.css'

const Tabs = () => {
    const active = 'mr-4 font-medium border-b-2 border-b-black-100 dark:border-b-secondary-purple-dark text-black-100 dark:text-secondary-purple-dark transition-colors duration-300'

    const styles = 'mr-4 mb-2 font-regular text-black-40 dark:text-primary-light whitespace-nowrap';


    return (
        <div className='w-full'>
            <div className="mobile block md:hidden w-full">
                <Swiper
                    spaceBetween={10}
                    slidesPerView="auto"
                >
                    <SwiperSlide style={{ width: 'auto' }}>
                        <Link className={useMatch('/fabrics') ? active : styles} to="/fabrics">Все модели</Link>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: 'auto' }}>
                        <Link className={useMatch('/fabrics/create') ? active : styles} to="/fabrics/create">Добавить модель</Link>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: 'auto' }}>
                        <Link className={useMatch('/fabrics/import') ? active : styles} to="/fabrics/import">Импорт моделей</Link>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: 'auto' }}>
                        <Link className={useMatch('/fabrics/export') ? active : styles} to="/fabrics/export">Экспорт моделей</Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="desktop md:flex hidden flex-wrap">
                <Link className={useMatch('/fabrics') ? active : styles} to="/fabrics">Все модели</Link>
                <Link className={useMatch('/fabrics/create') ? active : styles} to="/fabrics/create">Добавить модель</Link>
                <Link className={useMatch('/fabrics/import') ? active : styles} to="/fabrics/import">Импорт моделей</Link>
                <Link className={useMatch('/fabrics/export') ? active : styles} to="/fabrics/export">Экспорт моделей</Link>
                <Link className={useMatch('/fabrics/export/2') ? active : styles} to="/fabrics/export/2">Экспорт моделей 2</Link>
            </div>
        </div>
    )
}

export default Tabs