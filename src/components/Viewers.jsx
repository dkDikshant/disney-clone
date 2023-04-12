import React from 'react'
import img1 from '../images/viewers-disney.png'
import img2 from '../images/viewers-marvel.png'
import img3 from '../images/viewers-national.png'
import img4 from '../images/viewers-pixar.png'
import img5 from '../images/viewers-starwars.png'
import styled from '@emotion/styled'


const Container = styled('div')({
    marginTop: '30px',
    display: 'grid',
    gridGap: '25px',
    padding: '30px 0px 26px',
    gridTemplateColumns: 'repeat(5,minmax(0,1fr))'


})
const Wrap = styled('div')({
    border: '3px solid rgba(249,249,249,0.1)',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px',

    '&:hover': {
        transform: 'scale(1.05)',
        borderColor: 'rgba(249,249,249,0.8)'

    },
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }

})
const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={img1} alt="" />
            </Wrap>
            <Wrap>
                <img src={img2} alt="" />
            </Wrap>
            <Wrap>
                <img src={img3} alt="" />
            </Wrap>
            <Wrap>
                <img src={img4} alt="" />
            </Wrap>
            <Wrap>
                <img src={img5} alt="" />
            </Wrap>

        </Container>
    )
}

export default Viewers
