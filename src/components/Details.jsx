import styled from '@emotion/styled'
import React from 'react'
import dimg1 from '../images/dimg1.webp'
import bb1 from '../images/bb1.webp'
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Container = styled('div')({

})

const BackgroundImage = styled('div')({
    position: 'fixed',
    opacity: '0.8',
    zIndex: -1,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

})
const Imagetitle = styled('div')({
    width: '35vw',
    height: '30vh',
    padding: 20,
    '& img': {
        width: '90%',
        height: '90%',
        objectFit: 'contain'
    }
})

const Controls = styled('div')({
    display: 'flex',
    padding: 20

})
const Playbutton = styled('div')({
    marginRight: 20

})

const SubTtile = styled('div')({
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 12
})

const Discription = styled('div')({
    width: '40%',
    paddingLeft: 20,
    paddingTop: 10,
    lineHeight: 1.4,
    wordSpacing: 1.5,
    fontFamily: 'times roman'
})


const Details = () => {
    return (
        <div>
            <Container>
                <BackgroundImage>
                    <img src={dimg1} />
                </BackgroundImage>
                <Imagetitle>
                    <img src={bb1} />
                </Imagetitle>
                <Controls>
                    <Playbutton>
                        <Button style={{ color: 'black', background: 'white', width: '100px' }}>
                            <PlayArrowIcon />
                            <span>Play</span>
                        </Button>
                    </Playbutton>
                    <Playbutton>
                        <Button style={{ color: 'white', background: 'transparent', width: '100px', border: '1px solid white' }}>
                            <PlayArrowIcon />
                            <span>Trailer</span>
                        </Button>
                    </Playbutton>
                    <Playbutton>
                        <AddCircleIcon style={{ cursor: 'pointer', fontSize: 30 }} />
                    </Playbutton>
                    <Playbutton>
                        <GroupsIcon style={{ cursor: 'pointer', fontSize: 30, background: 'black', borderRadius: 100 }} />
                    </Playbutton>
                </Controls>
                <SubTtile>
                    2019 <FiberManualRecordIcon style={{ fontSize: 10 }} /> 1h 44m
                    <FiberManualRecordIcon style={{ fontSize: 10 }} /> 4 Languages <FiberManualRecordIcon style={{ fontSize: 10 }} />
                </SubTtile>
                <Discription>
                    "Why was Elsa born with magical powers? Together with Anna, Kristoff, Olaf, and Sven, she sets out on a dangerous but remarkable journey to find the answer."
                </Discription>
            </Container>

        </div>
    )
}

export default Details
