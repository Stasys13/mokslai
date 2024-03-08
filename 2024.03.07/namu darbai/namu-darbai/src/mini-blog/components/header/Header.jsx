// import { useState } from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
                <div className='header'>
                    <div className="rounded-pill border border-2 px-2">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div>
                        <h6>MAGDESING</h6>
                    </div>
                    <div className='logo'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                    <div>
                        <nav><i className="bi bi-list"></i></nav>
                    </div>
                </div>

        </>
    )
}

export default Header