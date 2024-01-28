import { Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import SiteHero from '../components/site-hero/SiteHero';
import GamesList from '../components/games-lsit/GamesList';
import Cta from '../components/cta/Cta';
import Charts from '../components/chart/Charts';

const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    speed: 7000,
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <SiteHero />
            <section id='live-results' className='live-results'>
                <Slider {...settings} style={{ textAlign: 'center' }}>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                </Slider>
            </section>
            <GamesList/>
            <Cta/>
            <section id='live-results' className='live-results'>
                <Slider {...settings} style={{ textAlign: 'center' }}>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Satta Live Results of January 27, 2024</Typography>
                    </div>
                </Slider>
            </section>
            <GamesList/>
            <Charts/>
        </>
    )
}

export default Home