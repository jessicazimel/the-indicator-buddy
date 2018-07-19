import React, { Component } from "react";
import TopBar from "../components/TopBar";

import GameCards from "../components/GameCards";

// Import UI components
import { Grid } from "semantic-ui-react";

import friendData from "../data/friendData";

class Game extends Component {
  state = {
    friendData: friendData,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <Grid centered padded>
        <TopBar score={this.state.score} topScore={this.state.topScore}/>
        
        <GameCards score={this.state.score} friendData={this.state.friendData} handleCardClick={this.handleCardClick}/>
      </Grid>
    )
  }
}

export default Game;