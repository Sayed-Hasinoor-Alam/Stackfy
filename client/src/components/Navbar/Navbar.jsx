 import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import {Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
// import './Avatar/Avatar'
import './Navbar.css'
// import './Button/Button'

const Navbar =()=> {

    var User = 123

    return (
        <nav>
            <div className="navbar">
                <Link to='/' className="nav-item nav-logo">
                    <img src={logo} alt='logo' />
                </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form >
                <input type="text" placeholder='Search...'/>
                <img src={search} alt='search' width="18" className='search-icon'/>
            </form>
            {
                User ==null ?
                <link to='/Auth' className='nav-item nav-links'>log in</link> :
                <>
                    <Link to='/' ><Avatar backgroundColor="blue" px='10px' py='7px' borderRadius='50%' color='green' cursor=''>M</Avatar></Link>
                    <button>Log in</button>
                </>
            }

            </div>
        </nav>
    )
}

export default Navbar