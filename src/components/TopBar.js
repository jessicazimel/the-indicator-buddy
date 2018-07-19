import React from "react";
import {Grid, Header} from "semantic-ui-react";

const styles = {
  fontSize: "22px",
  margin: "12px 0"
};

const TopBar = props => (
  <Grid.Row 
    as="div"
    
    verticalAlign={"middle"}
    color={"black"}
    
  >

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles} textAlign={"center"}>
        don't panic.
      </Header>
    </Grid.Column>

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles} textAlign={"center"}>
        THE INDICATOR BUDDY
      </Header>
    </Grid.Column>

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles} textAlign={"center"}>
        we have your back.
      </Header>
    </Grid.Column>

  </Grid.Row>
);

export default TopBar;