import React from 'react'

const Header = () => {
    return (
        <div className='header_container'>
            <div className='header_content-container'>
                <div className='header_text-container'>
                    <h1>
                        <span>Evolve</span>
                        <span className='your'>your</span>
                        <span className='ride'>ride</span>
                    </h1>
                </div>
                <div className='header_image-container'>
                    <img src='/static/bikewhite1.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Header