import React, { Component } from "react";
import Drink from "./Drink";

export default class Drinks extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        {this.props.drinks.map((drink) => (
          <Drink key={drink.idDrink} drink={drink} />
        ))}
      </div>
    );
  }
}
