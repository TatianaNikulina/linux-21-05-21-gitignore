import React, { Component } from "react";
import Reactions from "./Reactions";

export default class Drink extends Component {
  render() {
    return (
      <div className="border-2 rounded-md border-purple-500 hover:border-gray-500 p-3">
        <h2 className="mb-2">{this.props.drink.strDrink}</h2>
        <img src={this.props.drink.strDrinkThumb} alt="" />
        <Reactions
          like={this.props.drink.like}
          dislike={this.props.drink.dislike}
          id={this.props.drink.idDrink}
        />
      </div>
    );
  }
}
