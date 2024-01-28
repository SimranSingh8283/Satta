import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout'
import Home from './Pages/Home';

const App = () => {

    const theme = createTheme({
        palette: {
            primary: {
                light: '#d7fbdf',
                main: '#1cc343',
                dark: '#149031',
            },
            secondary: {
                light: '#f3e5f5',
                main: '#ce93d8',
                dark: '#ab47bc',
            },
        },
        spacing: [0, 4, 8, 16, 32, 64],
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1280,
                xxl: 1420,
            },
        },
        typography: {
            fontFamily: [
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Open Sans',
                'Open Sans',
                '"Helvetica Neue"',
                'sans-serif',
                'Arial',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            h1: {
                fontSize: '3rem',
                fontWeight: 800,
                '@media (max-width: 991.95px)': {
                    fontSize: '2.5rem',
                },
                '@media (max-width: 575.95px)': {
                    fontSize: '1.75rem',
                },
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 700,
                '@media (max-width: 991.95px)': {
                    fontSize: '1.75rem',
                },
                '@media (max-width: 575.95px)': {
                    fontSize: '1.5rem',
                },
            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: 500,
                '@media (max-width: 991.95px)': {
                    fontSize: '1.35rem',
                },
                '@media (max-width: 575.95px)': {
                    fontSize: '1.25rem',
                },
            },
            h5: {
                fontSize: '1.15rem',
                fontWeight: 500
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Home />
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App