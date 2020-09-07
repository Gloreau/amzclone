import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className='header'>
            <Link to='/'> <img class="header__logo" src='https://cdn.1min30.com/wp-content/uploads/2017/12/symbole-amazone.jpg' alt='' /></Link>
            <div class="header__search">
                <input class="header__searchInput"></input>
                <SearchIcon className='header__searchIcon' />
            </div>
            <div class="header__nav">
                <Link className='header__link' to='/login'>
                    <div class="header__option">
                        <span className='header__optionLineOne'>Hello Qazi</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <Link className='header__link' to='/login'>
                    <div class="header__option">
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link className='header__link' to='/login'>
                    <div class="header__option">
                        <span className='header__optionLineOne'>>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link className='header__link' to='/checkout'>
                    <div class="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span class="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
