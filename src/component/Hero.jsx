import React from 'react'
import logo from "../trust-svg.png"

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-header-text'>
                <h1 className='hero-heading'>True crypto ownership.</h1>
                <h1 className='hero-heading'>Powerful Web3 experiences</h1>
                <p className='hero-text'>Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
            <button className='hero-btn'>Connect Wallet</button>
            </div>
            <div className='hero-image'>
                <img src={logo} alt="hero" className='hero-image' />
            </div>
        </div>
    )
}

export default Hero