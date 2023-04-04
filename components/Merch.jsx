import React from 'react'
import { motion } from 'framer-motion'
import { BsGearWide } from 'react-icons/bs'

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

const Merch = () => {
    return (
        <div className='merch_container'>
            <div className='merch_heading-container'>
                <motion.p variants={fadeIn('right', 'tween', 0.1, .6)} initial='hidden' whileInView='show'>GET GEARED UP <span><BsGearWide className='icon' /></span></motion.p>
                <motion.h2 variants={fadeIn('right', 'tween', 0.3, .5)} initial='hidden' whileInView='show'>Merchandise</motion.h2>
            </div>
            <div className='merch_card-container'>
                <div className='merch_card'>
                    <img src='/static/bikeproduct1.png'></img>
                    <h3>RIDING JERSEYS</h3>
                    <button type='button'>Explore the range</button>
                </div>
                <div className='merch_card'>
                    <img src='/static/helmet1.png'></img>
                    <h3>HELMETS</h3>
                    <button type='button'>Explore the range</button>
                </div>
                <div className='merch_card'>
                    <img src='/static/bikeproduct2.png'></img>
                    <h3>SPORTS BOTTLES</h3>
                    <button type='button'>Explore the range</button>
                </div>
            </div>
        </div>
    )
}

export default Merch