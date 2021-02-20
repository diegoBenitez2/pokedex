import React, { Component } from "react";

//Css
import './styles/PokemonDescription.scss'
class PokemonDescription extends Component {
  render() {
    return (
      <section className="PokemonDescription">
        <figure className="PokemonDescription_figure">
          <img
            className="PokemonDescription_figure-img"
            src=""
            alt="img-pokemon"
          />
        </figure>
        <textarea type="text" className="PokemonDescription_textarea" />
      </section>
    );
  }
}

export default PokemonDescription;
