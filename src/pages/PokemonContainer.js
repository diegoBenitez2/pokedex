import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pokesActions from '../actions/pokesActions';
// Css
import './styles/PokemonContainer.scss';
// Component
import PokemonCard from '../components/PokemonCard';

// Assets
import SpinnerInfinity from '../assets/infinity.svg';

class PokemonContainer extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.pokemons).length) {
      console.log('no hay');
      this.props.getAllPokes();
    }
  }

  putCardPokemon = () => {
    const { pokemons, loading } = this.props;

    if (loading) {
      return (
        <div className="containerInfinity">
          <img src={SpinnerInfinity} alt="" />
        </div>
      );
    }

    return Object.keys(pokemons).map((poke) => (
      <div key={poke} className="PokemonCard">
        <PokemonCard
          id={poke}
          img={pokemons[poke].image}
          name={pokemons[poke].name}
          types={pokemons[poke].types}
          exp={pokemons[poke].experience}
        />
      </div>
    ));
  };

  render() {
    console.log(this.props);
    return (
      <section className="PokemonContainer">{this.putCardPokemon()}</section>
    );
  }
}
const mapStateToProps = ({ pokemonsReducers }) => pokemonsReducers;
export default connect(mapStateToProps, pokesActions)(PokemonContainer);
