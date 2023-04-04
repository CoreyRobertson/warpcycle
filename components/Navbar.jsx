import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <nav >
            <h3>Future<span>Ride</span></h3>
            <div onClick={handleNav} className='navbar_icon'>{nav ? <AiOutlineClose /> : <BiMenuAltRight />} </div>
            <div className={nav ? 'navbar_closed' : 'navbar_open'}>
                <ul>
                    <Link href='/'>
                        <motion.li variants={fadeIn('up', 'spring', .1, .5)} className='nav_link' initial='hidden' whileInView='show'>HOME</motion.li>
                    </Link>
                    <Link href='/'>
                        <motion.li variants={fadeIn('up', 'spring', .2, .5)} className='nav_link' initial='hidden' whileInView='show'>CYCLE</motion.li>
                    </Link>
                    <Link href='/'>
                        <motion.li variants={fadeIn('up', 'spring', .3, .5)} className='nav_link' initial='hidden' whileInView='show'>MERCH</motion.li>
                    </Link>
                    <Link href='/'>
                        <motion.li variants={fadeIn('up', 'spring', .4, .5)} className='nav_link' initial='hidden' whileInView='show'>PARTS</motion.li>
                    </Link>
                    <Link href='/'>
                        <motion.li variants={fadeIn('up', 'spring', .5, .5)} className='nav_link' initial='hidden' whileInView='show'>CONTACT</motion.li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar