import React from 'react'
import { styled } from '@mui/material';
import logo from '../images/logo.svg'
import homelogo from '../images/home-icon.svg'
import originallogo from '../images/original-icon.svg'
import searchlogo from '../images/search-icon.svg'
import serieslogo from '../images/series-icon.svg'
import watchlistlogo from '../images/watchlist-icon.svg'
import movielogo from '../images/movie-icon.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../'


const Nav = styled('div')({
    height: '50px',
    background: '#090b13',
    display: 'flex',
    alignItems: 'center',
    padding: '0 36px'
})

const NavbarMenu = styled('div')({
    display: 'flex',
    flex: 1,
    marginLeft: '2%',

    '& a': {
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        cursor: 'pointer',

        '& img': {
            height: '20px'
        },
        '& span': {
            fontSize: '13px',
            letterSpacing: '1.42px',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border - bottom 0.2s ease-in -out',
            '&: hover': {
                borderBottom: '2px solid white'
            }


        }
    }
})




const Header = () => {
    return (
        <Nav>
            <img src={logo} style={{ width: '70px', cursor: 'pointer' }} />
            <NavbarMenu className='hovereffect'>
                <a>
                    <img src={homelogo} />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={searchlogo} />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={watchlistlogo} />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={originallogo} />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={movielogo} />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src={serieslogo} />
                    <span>SERIES</span>
                </a>
            </NavbarMenu>
            <AccountCircleIcon style={{ cursor: 'pointer' }} />



        </Nav>
    )
}

export default Header

