import React from 'react'
import { Parallax } from "react-parallax"
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { motion } from 'framer-motion';

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

const Parallax1 = () => {
    return (
        <Parallax className="image" bgImage="/static/rider.jpg" strength={300}>
            <div className="content">
                <div className='parallax_container-1'>
                    <motion.div variants={fadeIn('down', 'spring', 0.2, 1.3)} initial='hidden' whileInView='show' className='check_container'>
                        <AiOutlineCheckCircle className='check' />
                        <p>Product feature product feature product feature</p>
                    </motion.div>
                    <motion.div variants={fadeIn('down', 'spring', 0.5, 1.3)} initial='hidden' whileInView='show' className='check_container'>
                        <AiOutlineCheckCircle className='check' />
                        <p>Product feature product feature product feature</p>
                    </motion.div>
                    <motion.div variants={fadeIn('down', 'spring', 0.7, 1.3)} initial='hidden' whileInView='show' className='check_container'>
                        <AiOutlineCheckCircle className='check' />
                        <p>Product feature product feature product feature</p>
                    </motion.div>


                </div>

            </div>
        </Parallax>
    )
}

export default Parallax1