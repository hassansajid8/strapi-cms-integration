import React from 'react'
import classes from './NavbarContent.module.css'
import { Anchor, Flex } from '@mantine/core'

const NavbarContent = () => {
    return (
        <Flex
            direction='column'>
                <a href="#" className={classes.anchor}>Home</a>
                <a href="#" className={classes.anchor}>Company</a>
                <a href="#" className={classes.anchor}>Global Reach</a>
                <a href="#" className={classes.anchor}>Products</a>
                <a href="#" className={classes.anchor}>Contact Us</a>

        </Flex>
    )
}

export default NavbarContent