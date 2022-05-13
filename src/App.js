import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    players: [],
  };

  async componentDidMount() {
    const response = await fetch("/players");
    const body = await response.json();
    this.setState({ players: body });
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <h2>Players</h2>
        {players.map((player) => (
          <div key={player.id}>{player.name}</div>
        ))}
      </div>
    );
  }
}
export default App;
