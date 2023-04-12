import React from 'react'
import { styled } from '@mui/material';
import homebg from '../images/home-background.png'
import ImgSlider from './ImgSlider';

const Container = styled('div')({
    padding: '15px',
    backgroundImage: `URL(${homebg})`,
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
})

const Home = () => {
    return (
        <Container>
            <ImgSlider />


        </Container>
    )
}

export default Home
