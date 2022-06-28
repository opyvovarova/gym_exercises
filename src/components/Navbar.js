import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';   

import Logo from '../assets/images/Logo.png';
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none'}} px="20px ">
      <Link to="/">
        <img src={Logo}  alt="Logo" style={{ width: '150px', height: '57px', margin: '0 20px' }}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', borderBottom: '3px solid #f849b3' }}>Home</Link>
        <a href="#exercises"  style={{ textDecoration: 'none', color: '#fff', width: '100%' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar