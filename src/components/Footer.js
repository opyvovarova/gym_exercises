import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#72385a"> 
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="150px" height="60px" />
        <Typography variant="h5" pb="40px" mt="20px" >
          Made with ❤️‍🔥 
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer