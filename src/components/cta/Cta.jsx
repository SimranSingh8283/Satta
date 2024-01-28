import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Parallax from '../parallax/Parallax';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Cta = (props) => {
    return (
        <Parallax>
            <section id='cta' className='cta block'>
                <div className="parallax-image">
                    <img src="/images/banner-large.jpg" alt="" />
                </div>

                <Container maxWidth='xl' sx={{ textAlign: 'center' }}>
                    <Stack gap={2} alignItems='center'>
                        <Typography className='section-title' variant='h1'>Join the Excitement at <img className='logo' src="/logo.svg" alt="Satta" /></Typography>
                        <Typography variant='h3'>Get in on the Action Today</Typography>
                        <Button sx={{ marginTop: 3 }} variant='contained' size='large' startIcon={<WhatsAppIcon/>}>WhatsApp Chat</Button>
                    </Stack>
                </Container>
            </section>
        </Parallax>
    )
}

export default Cta