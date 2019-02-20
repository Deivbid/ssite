import React, { Component } from "react";
import { Header } from "../components/Header";
import { TableList } from "../components/TableList";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { items } from "../data/items";

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

    this.state = {};
  }

  render() {
    return (
      <Grommet theme={theme} full={true}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Header />
              <TableList items={items} />              
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
