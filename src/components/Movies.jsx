import styled from '@emotion/styled'
import React from 'react'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img7 from '../images/img7.webp'
import img6 from '../images/img6.webp'
import img5 from '../images/img5.webp'

const Content = styled('div')({
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: 'repeat(4,minmax(0,1fr))'

})

const Wrap = styled('div')({
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.05)',
        borderColor: 'rgba(249,249,249,0.8)'

    },
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px'
    }

})


const Movies = () => {
    return (
        <div>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src={img1} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img2} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img7} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img5} alt="" />
                </Wrap>
            </Content>
        </div>
    )
}

export default Movies
