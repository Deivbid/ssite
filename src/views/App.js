import React, { Component } from "react";
import { Header } from "../components/Header";
import { TableList } from "../components/TableList";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { Spinner } from "../components/Spinner/Spinner";
//import { items } from "../data/items";
import Tabletop from "tabletop";

const theme = {
  font: {
    family: "Roboto",
    size: "14px",
    height: "20px"
  }
};

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    Tabletop.init({
      key: '1wh7QUfQKMSgkVfXA21P2XBwpSr4zMpCmCLNX0GDpuco',
      callback: data => {
        this.setState({data: data['The Process Wall'].elements});
      },
      wanted: ['The Process Wall'],
    });
  }

  render() {
    return (
      <Grommet theme={theme} full={true}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Header />
              {this.state.data.length !== 0 ? <TableList items={this.state.data} /> : <Spinner />}           
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
