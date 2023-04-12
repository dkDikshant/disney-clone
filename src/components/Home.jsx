import React from 'react'
import { styled } from '@mui/material';
import homebg from '../images/home-background.png'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

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
            <Viewers />


        </Container>
    )
}

export default Home
