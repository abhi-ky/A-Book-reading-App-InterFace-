import React from 'react';
import HomeIcon from '../../assets/Images/home.png';
import './HomeNav.scss';
import { Link } from 'react-router-dom';

const HomeNav = () =>{
    return (
        <div className='HomeNav'>
            <Link to='/' >
                <img src={ HomeIcon }></img>
            </Link>
        </div>
    )
}

export default HomeNav;