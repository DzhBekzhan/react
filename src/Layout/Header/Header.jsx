import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';

import Search from '../../images/search_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Fav from '../../images/favorite_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../../images/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.png'
const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
            <h1 className='header__logo'>YOUR LOGO</h1>
            <ul className='header__lists'>
                <Link to='/Home'><li>HOME</li></Link>
                <Link to='/Shop'><li>SHOP</li></Link>
                <Link to='/Lookbook'><li>LOOKBOOK</li></Link>
                <Link to='/Features'><li>FEATURES</li></Link>
                <Link to='/Pages'><li>PAGES</li></Link>
                <Link to='/Blog'><li>BLOG</li></Link>
            </ul>
            <div className='header__right'>
                <img src={Search} alt="" />
                <img src={Fav} alt="" />
                <img src={Cart} alt="" />
            </div>
            </div>
        </header>
    );
};

export default Header;