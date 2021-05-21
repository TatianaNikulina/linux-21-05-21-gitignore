import React, { Component } from "react";
import { DrinkContext } from "./App";

export default class Reactions extends Component {
  render() {
    return (
      <DrinkContext.Consumer>
        {(cntx) => {
          return (
            <div className="p-4 text-center">
              <button
                onClick={() => {
                  cntx.likeChange(true, this.props.id);
                }}
                className="bg-purple-500 hover:bg-gray-500 text-white py-1 px-4 rounded-md mr-4 cursor-pointer"
              >
                {this.props.like} +
              </button>
              <button
                onClick={() => {
                  cntx.likeChange(false, this.props.id);
                }}
                className="bg-purple-500 hover:bg-gray-500 text-white py-1 px-4 rounded-md  cursor-pointer"
              >
                - {this.props.dislike}
              </button>
            </div>
          );
        }}
      </DrinkContext.Consumer>
    );
  }
}
