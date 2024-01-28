import React from 'react';
import { Container, IconButton, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <footer id='site-footer' className='site-footer'>
                <Container maxWidth="xl" className='container'>
                    <div className="logo">
                        <img src="/logo.svg" alt="Satta" />
                    </div>
                    <Typography variant='h6'>Disclaimer</Typography>
                    <Typography>
                        Betting involves risk and is only suitable for individuals aged 18 and over. Please gamble responsibly. Your use of this app is subject to our Terms and Conditions.
                    </Typography>
                </Container>
            </footer>
            <IconButton className='whatsapp-btn' centerRipple={false}><WhatsAppIcon/></IconButton>
        </>
    )
}

export default Footer