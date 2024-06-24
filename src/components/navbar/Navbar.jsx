import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../assets/cart.png'
const Navbar = () => {
    let cartItem = JSON.parse(localStorage.getItem("products"))
    return (
        <div className='navbar'>
            <ul className='menu'>
                <li>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" className='nav-link'>
                        Products
                    </Link>
                </li>
                <li >
                    <Link to="/profile" className='nav-link'>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='nav-link'>
                        About
                    </Link>
                </li>
            </ul>
            <div className='cart-block'>
                <Link to="/cart" className='nav-link'>
                     <p className='items-in-cart'>{cartItem.length}</p>
                    <img src={cart} alt="cart" className='cart' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
