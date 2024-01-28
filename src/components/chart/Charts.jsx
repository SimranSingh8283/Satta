import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Charts = () => {
    return (
        <section id='charts' className='charts block bg-secondary'>
            <Container maxWidth='xl' sx={{textAlign: 'center'}}>
                <Typography variant='h1' className='section-title'>Monthly and Yearly Combined Chart</Typography>
                <Stack className='chartbox' flexDirection='row' flexWrap='wrap' gap={3} justifyContent='center'>
                    <TextField id="month" color='success' label="Month" variant="outlined" />
                    <TextField id="Year" color='success' label="Years" variant="outlined" />
                    <Button variant='contained' color='primary'>Go</Button>
                    <Button variant='contained' size='large' startIcon={<WhatsAppIcon/>}>WhatsApp Chat</Button>
                </Stack>
            </Container>
        </section>
    )
}

export default Charts