import React, { Component } from "react";
import { connect } from "react-redux";

//Css
import "./styles/PokemonDescription.scss";
//Components
import Spinner from "../components/SpinnerDesc";

class PokemonDescription extends Component {
  putImgPoke = () => {
    const { pokemon } = this.props;
    if (Object.keys(pokemon).length) {
      return (
        <img
          className="PokemonDescription_figure-img"
          src={this.props.pokemon.image}
          alt="img-pokemon"
        />
      );
    }
    return <Spinner />;
  };
  getAbilities = () => {
    const { pokemon } = this.props;
    let description = "";
    pokemon.abilities.forEach((ab) => {
      description += `Ability: ${ab.name} \n`;
      ab.effect.forEach((ef) => {
        if (ef.language === "en") {
          description += `${ef.effect}\n`;
        }
      });
    });
    return description;
  };
  putDescriptionPoke = () => {
    const { pokemon } = this.props;
    if (Object.keys(pokemon).length) {
      return (
        <div className=" w-100">
          <div className="col-12  mb-2 d-flex justify-content-evenly">
            <p className="PokemonDescription_textarea-title fas fa-pastafarianism">
              <span className="m-2">{pokemon.name}</span>
            </p>
            <p className="PokemonDescription_textarea-title fas fa-fire-alt ">
              <span className="m-2">{pokemon.experience}</span>
            </p>
            <p className="PokemonDescription_textarea-title fas fa-text-height">
              {" "}
              <span className="m-2">{pokemon.height}</span>
            </p>
            <p className="PokemonDescription_textarea-title fas fa-weight ">
              <span className="m-2">{pokemon.weight}</span>
            </p>
          </div>

          <div className="col-12 p-2">
            <textarea className="PokemonDescription_textarea-description">
              {this.getAbilities()}
            </textarea>
          </div>
        </div>
      );
    }
    return <Spinner />;
  };

  render() {
    console.log(this.props.pokemon);

    return (
      <section className="PokemonDescription">
        <figure className="PokemonDescription_figure">
          {this.putImgPoke()}
        </figure>
        <div className="PokemonDescription_textarea">
          {this.putDescriptionPoke()}
        </div>
      </section>
    );
  }
}
const mapStateToProps = ({ pokemonsReducers }) => pokemonsReducers;

export default connect(mapStateToProps)(PokemonDescription);
