import React from 'react'
import { motion } from 'framer-motion'
import { CiPlay1 } from 'react-icons/ci'

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const Product1 = () => {
    return (
        <div className='product1_container'>

            <div className='product1_text-container'>
                <div className='product1_text-heading'>
                    <motion.p variants={fadeIn('right', 'tween', 0.1, .6)} initial='hidden' whileInView='show'>THE ORIGINAL <span><CiPlay1 className='icon' /></span></motion.p>
                    <motion.h2 variants={fadeIn('right', 'tween', 0.3, .5)} initial='hidden' whileInView='show'>Warpcycle <span>.01</span></motion.h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type='button'>Learn More</button>
                <h2 className='price'>From <span>$2999</span></h2>
            </div>
            <div className='product1_image-container'>
                <motion.img variants={fadeIn('', 'tween', 0.1, 0.5)} initial='hidden' whileInView='show' src='/static/bikedisplay1.png'></motion.img>
            </div>

        </div>
    )
}

export default Product1