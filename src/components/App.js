import React, { Component } from "react";

import { jsonData } from "../data";
import Drinks from "./Drinks";

const getDrinks = () => {
  const drinks = jsonData.drinks;
  drinks.forEach((drink) => {
    drink.like = 0;
    drink.dislike = 0;
  });
  return drinks;
};

export const DrinkContext = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: getDrinks(),
    };
  }

  likeChange = (isLike, id) => {
    const drinks = [...this.state.drinks];
    const indx = drinks.findIndex((drink) => drink.idDrink === id);
    if (indx === -1) {
      return false;
    }
    const field = isLike ? "like" : "dislike";
    drinks[indx][field]++;
    this.setState({ drinks });
  };

  render() {
    return (
      <section className="container mx-auto">
        <DrinkContext.Provider value={{ likeChange: this.likeChange }}>
          <Drinks drinks={this.state.drinks} />
        </DrinkContext.Provider>
      </section>
    );
  }
}
