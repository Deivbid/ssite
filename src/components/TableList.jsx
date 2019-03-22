import React from 'react';
import { 
	Box, 
	Heading, 
	Image, 
	Paragraph,
	Button, 
	Grommet,
} from 'grommet';
import '../styles/TableList.css';

import LGenerator from "../images/LGenerator.png";
import LGeneratorCheck from "../images/LGeneratorCheck.png";
import Message from "../images/messages.png";
import Email from "../images/email.png";

const border = {
	side: 'bottom',
	color: '#B9B9B9',
	size: 'xsmall',
};

const theme = {  
	button:{
		primary: {
			color: '#542FEA'
		},
    padding: {
      vertical: "3.5px",
      horizontal: "35px"
    },		
	},
};

const CustomButton = (props) => (
  <Grommet theme={theme}>
    <Box align="center" margin='auto'>
			<Button 
				label={'Delegate'} 
				href={`${props.link}`}
				target='_blank' 
				primary={true} 
				style={{fontSize: '14px'}}
			/>
    </Box>
  </Grommet>
)

const findImage = (image) => {
	switch(image){
		case 1: return LGenerator
		case 2: return LGeneratorCheck
		case 3: return Message
		case 4: return Email
		default: return LGenerator
	}
}

const generateItems = (props) => {
	const { items } = props;
	return items.map((item, index) => {
		return (
				<Box 
					direction='row-responsive' 
					justify='between' 
					heigth='large' 
					width='xlarge'
					border={border}
					margin={{vertical: 'small'}}
					key={index}
				>
					<Box 
						direction='row'
						justify='center'
					>
						<Box 
							height='4em'
							width='4em'
							margin={{vertical: 'auto', right: '.5em'}}
						>
							<Image src={findImage(parseInt(item.Image))} fit='contain'/>
						</Box>

						<Box
							height='xsmall'
							margin={{vertical: 'auto'}}
							justify='center'
						>
							<Heading 
								level='3' 
								margin='none' 
								className='itemTitle Ubuntu'
							> 
								{item.Name} 
							</Heading>
							<Box width='small'>
								<Paragraph 
									margin='none'
									className='itemText Ubuntu'
									size='small'
								>
									{item.Description}
								</Paragraph>
							</Box>
						</Box>
					</Box>
					<Box height='xsmall' justify='center'>
						<CustomButton link={item.Link}/>
					</Box>					
				</Box>
		);
	})
}

const TableList = (props) => {
    return(
			<div 
				className='list'
			>
				{generateItems(props)}
			</div>
    )
}

export { TableList }
