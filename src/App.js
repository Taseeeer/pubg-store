import Header from "./components/Header";
import "./app.css";
import styled from "styled-components";
import Ids from "./components/Ids";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import React from "react";
import data from "./data";

class App extends React.Component {
  AppStyled = styled.div`
    width: 90%;
    margin: auto;

    .id-order {
      display: flex;

    }
  `;

  state = {
    games: {},
    order: {},
  } 


  addGame = game => {
    //copy
    const games = {...this.state.games};
    games[`game${Date.now()}`] = game;

    this.setState({
      games
    });
  }

  addToOrder = key => {
    const order = {...this.state.order};

    order[key] = order[key] + 1 || 1;

    this.setState({order})
  }

  loadSampleGames = () => {
    this.setState({games: data})
  }

    render() {
      return (
      <this.AppStyled>
        <Header />
        <div className="id-order">
          <Ids addToOrder={this.addToOrder} gamestate={this.state.games} de />
          <Order order={this.state.order} games={this.state.games} />
          <Inventory loadSampleGames={this.loadSampleGames} addGame={this.addGame} />
        </div>
      </this.AppStyled>
  );
    }
}

export default App;
