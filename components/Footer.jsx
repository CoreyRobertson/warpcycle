import React from 'react'
import { BsArrowBarUp } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className='footer_container'>
            <h3>Future<span>Ride</span></h3>
            <div className='footer_content-container'>
                <div className='footer_links-container'>
                    <a>Link</a>
                    <a>Link</a>
                    <a>Link</a>
                    <a>Link</a>
                    <a>Link</a>
                </div>
                <div className='home_container'>
                    <p>Back to the top</p>
                    <BsArrowBarUp className='up_icon' />
                </div>
            </div>
        </footer>
    )
}

export default Footer