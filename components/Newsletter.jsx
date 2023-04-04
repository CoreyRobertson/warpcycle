import React from 'react'
import { motion } from 'framer-motion'
import { CiTwitter, CiInstagram, CiFacebook } from 'react-icons/ci'

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

const Newsletter = () => {
    return (
        <div className='newsletter_container'>
            <div className='newsletter_heading-container'>
                <motion.p variants={fadeIn('right', 'tween', 0.1, .6)} initial='hidden' whileInView='show' >FOR NEWS AND UPDATES</motion.p>
                <motion.h2 variants={fadeIn('right', 'tween', 0.3, .5)} initial='hidden' whileInView='show'>Subscribe</motion.h2>
            </div>
            <div className='newsletter_socials-container'>
                <motion.div variants={fadeIn('right', 'spring', 1, 1)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CiTwitter className='social_icon' /></motion.div>
                <motion.div variants={fadeIn('right', 'spring', 1.2, 1)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CiInstagram className='social_icon' /></motion.div>
                <motion.div variants={fadeIn('right', 'spring', 1.4, 1)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CiFacebook className='social_icon' /></motion.div>
            </div>
            <div className='newsletter_form-container'>
                <form>
                    <motion.input variants={fadeIn('up', 'tween', 0.2, 0.6)} initial='hidden' whileInView='show' placeholder='Your Name'></motion.input>
                    <motion.input variants={fadeIn('up', 'tween', 0.4, 0.6)} initial='hidden' whileInView='show' placeholder='Your Email'></motion.input>
                    <motion.button variants={fadeIn('up', 'tween', 0.6, 0.6)} initial='hidden' whileInView='show' type='submit'>Submit</motion.button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter