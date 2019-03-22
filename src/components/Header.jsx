import React from 'react';
import { Box, Image } from 'grommet';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = (props) => {
    return(
        <div className='headerContainer'>
          <Box height='xsmall' width='small'>
            <Image 
              src={Logo}
              alt='Invisible'
              fit='contain'
            />
          </Box>
				</div>
    )
}

export { Header }