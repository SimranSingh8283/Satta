import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid, Paper, Typography } from '@mui/material'
import Parallax from '../parallax/Parallax';


const SiteHero = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const dataList = [
        {
            name: 'Faridabad',
            code: 71
        },
        {
            name: 'Gali',
            code: 30
        },
        {
            name: 'Deshawar',
            code: 56
        },
        {
            name: 'Delhi Night',
            code: 95
        }
    ]

    return (
        <Parallax dataSpeed={0.75}>
            <Paper elevation={0} id='site-hero' className='site-hero'>
                <div className="hero-object">
                    <picture>
                        <source media='(max-width: 991.95px)' srcSet='/images/banner-small.webp' />
                        <source media='(max-width: 991.95px)' srcSet='/images/banner-small.jpg' />
                        <source media='(min-width: 992px)' srcSet='/images/banner-large.webp' />
                        <img src='/images/banner-large.jpg' />
                    </picture>
                </div>

                <Container maxWidth='xl'>
                    <Grid container spacing={3}>
                        {
                            dataList.map((data, i) => (
                                <Grid key={i} item xs={12} md={6}>
                                    <Item className='col-wrapper' style={{ animationDelay: '500' * i + 'ms' }}>
                                        <Typography variant='h2'>{data.name}</Typography>
                                        <Typography variant='h1'>{data.code}</Typography>
                                    </Item>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Paper>
        </Parallax>
    )
}

export default SiteHero