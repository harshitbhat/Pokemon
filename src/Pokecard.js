import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const padToThree = (number) =>
  number < 1000 ? `${number}`.padStart(3, 0) : number;
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Experience: {this.props.experience}</div>
      </div>
    );
  }
}

export default Pokecard;
