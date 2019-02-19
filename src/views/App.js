import React, { Component } from 'react';
import { Header } from '../components/Header';
import { TableList } from '../components/TableList';
import { 
  Box, 
  Grommet,
  ResponsiveContext,
} from 'grommet';

const theme = {  
  font: {
    family: 'Roboto',
    size: '14px',
    height: '20px',
  },
};

const items = [
  {
    title: 'Title',
    subtitle: 'Subtitlte',
    image: 'Here is an Image',
    buttonText: 'delegate'
  }
]

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Grommet theme={theme} full={true}>
        <ResponsiveContext.Consumer>
      {size => (
        <Box fill>          
          <Header />
          <Box 
            direction='row' 
            flex={true} 
            overflow={{ horizontal: 'hidden' }}
            margin={{ horizontal: 'large', vertical: 'small' }}
          >
            <TableList items={items} />
          </Box>  
        </Box>
        )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
