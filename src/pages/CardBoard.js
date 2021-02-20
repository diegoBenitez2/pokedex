import React, { Component } from "react";

//Components
import PokemonDescription from "./PokemonDescription";
import PokemonContainer from "./PokemonContainer";
//Css
import "./styles/CardBoard.scss";
class ContentCards extends Component{
  render(){
    return (
    <div className="CardBoard">
        <PokemonContainer />
        <PokemonDescription />
      </div>
    );

  }
};

export default ContentCards;
