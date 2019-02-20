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
				label={props.text} 
				onClick={() => {}} 
				primary={true} 
				style={{fontSize: '14px'}}
			/>
    </Box>
  </Grommet>
)

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
							<Image src={item.image} fit='contain'/>
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
								{item.title} 
							</Heading>
							<Box width='small'>
								<Paragraph 
									margin='none'
									className='itemText Ubuntu'
									size='small'
								>
									{item.subtitle}
								</Paragraph>
							</Box>
						</Box>
					</Box>
					<Box height='xsmall' justify='center'>
						<CustomButton text={item.buttonText}/>
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