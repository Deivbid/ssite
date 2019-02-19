import React from 'react';
import { Box, Image } from 'grommet';
import Logo from '../images/logo.png';

const AppBar = (props) => (
    <Box
      as='header'
      direction='row'
      align='center'
      justify='between'
      background='#FFF'
      margin={{ horizontal: 'large', top: 'small' }}
      elevation='medium'
      style={{ zIndex: '1', borderBottom: '1px solid #B9B9B9' }}
      {...props}
    />
);


const Header = (props) => {
    return(
      <AppBar>
        <Box height='xsmall' width='small'>
					<Image 
						src={Logo} 
						alt='Invisible' 
						fit='contain'
					/>
				</Box>
    	</AppBar>        
    )
}

export { Header }