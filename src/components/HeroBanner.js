import React from 'react';
import { Box, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
   <Box width="100%" alignItems="center" mt="37px" justifyContent="center" p="20px" textAlign="right" sx={{
    mt: { lg: '212px', xs: '70px'},
    ml: { sm: '50px'} ,
    textAlign: { lg: 'right', md: 'center' }
  }} position="relative" p="20px">
    <Typography color="#f74bb5"
    fontWeight="600" fontSize="26px" >
     Fitness Club
    </Typography>
    <Typography fontWeight={700} sx={{
      fontSize: { lg: '44px', xs: '40px' }
    }} mb="23px" mt="30px"  color="#fff">
      Sweat, Smile < br/> and Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color="#fff">
      Check out the most effective exercises
    </Typography>
    <Box className="btn-herobanner">
        <a href='#exercises'   style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#f74bb5', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Box>
    <Typography fontWeight={600}  color="#f74bb5" sx={{
      opacity: '0.1',
      textAlign: 'right',
      display: { lg: 'block', xs: 'none' },
      fontSize: '200px',
    }}>
      Exercise
    </Typography>
    <img  src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
   </Box>
  )
}

export default HeroBanner