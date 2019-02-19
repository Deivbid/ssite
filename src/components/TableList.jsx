import React from 'react';
import { 
	Box, 
	Heading, 
	Image, 
	Paragraph,
	Button, 
	Grommet,
} from 'grommet';
import LGenerator from '../images/LGenerator.png';
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
      vertical: "5px",
      horizontal: "40px"
    },		
	},
};

const CustomButton = () => (
  <Grommet theme={theme}>
    <Box align="center" pad="medium">
      <Button label="Delegate" onClick={() => {}} primary />
    </Box>
  </Grommet>
)

const TableList = (props) => {
    return(
        <Box align='center' fill>
					<Box 
						direction='row-responsive' 
						justify='between' 
						heigth='large' 
						width='xlarge'
						border={border}
					>
						<Box 
							direction='row'
							justify='between'
						>
							<Box 
								height='xsmall'
								width='xsmall'
							>
								<Image src={LGenerator} fit='contain'/>
							</Box>

							<Box
								height='xsmall'
							>
								<Heading 
									level='2' 
									margin='none' 
									className='itemTitle Ubuntu'
								> 
									Lead Generation 
								</Heading>
								<Box width='medium'>
									<Paragraph 
										margin='none'
										className='itemText Ubuntu'
									>
										Generate a list of leads from multiple sources, 
										including LinkedIn and Facebook
									</Paragraph>
								</Box>
							</Box>
						</Box>

						<Box height='xsmall' justify='center'>
							<CustomButton />
						</Box>
          </Box>

        	<Box>
						<Heading level='2' margin='none'> Lead Generation </Heading>
          </Box>

        	<Box>
						<Heading level='2' margin='none'> Lead Generation </Heading>
          </Box>

        	<Box>
						<Heading level='2' margin='none'> Lead Generation </Heading>
          </Box>															
        </Box>
    )
}

export { TableList }