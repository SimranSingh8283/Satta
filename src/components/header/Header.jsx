import React, { useEffect, useState } from 'react';
import { AppBar, Container, Stack, Typography } from '@mui/material';
import siteLogo from '/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Header = () => {

    const [navState, setNavState] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavState(true)
            } else {
                setNavState(false)
            }
        }
        handleScroll();

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    speed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const dataList = ['Faridabad 71', 'Gali 00', 'Deshawar 56', 'Delhi Night 99'];

    return (
        <AppBar id='site-header' className={navState ? 'site-header scrolled': 'site-header'}>
            <div className="topbar">
                <Slider {...settings} style={{ textAlign: 'center' }}>
                    {
                        dataList.map((data, i) => (
                            <div key={i}>
                                <Stack flexDirection='row' justifyContent='center' gap={2} alignItems='center'>
                                    <PlayArrowIcon />
                                    <Typography variant='h5'>{data}</Typography>
                                </Stack>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <Container maxWidth='xl' className='container'>
                <Stack direction="row" justifyContent='center' alignItems='center'>
                    <Link to='/' className="site-logo">
                        <img src={siteLogo} alt="Satta" />
                    </Link>
                </Stack>
            </Container>
        </AppBar>
    )
}
``
export default Header