import React, { Fragment } from "react";

//Css
import "./styles/PokemonCard.scss";
const PokemonCard = (props) => {
  const selectedCard = (e) => {
    const idCard = props.id;
    const $card = document.getElementById(`${idCard}`);
    $card.classList.toggle("selected");
  };
  return (
    <Fragment>
        <div className="PokemonCard__indicator">

      <div className="PokemonCard__indicator_types">
            {
          props.types.map((type)=>{

              switch (type){
                  case 'fire':
                      return(
                          <i key={type} className="fas fa-fire text-danger m-2"></i>
                          );
                  case 'grass':
                      return(
                           <i key={type}  className="fas fa-mountain text-success m-2"></i>
                           )
                   case 'flying':
                       return (
                       <i key={type} className="fas fa-feather-alt text-secondary m-1"></i>
                       )
                   case 'water':
                       return (
                           <i key={type} className="fas fa-water m-1 text-primary"></i>
                           )            
                        case 'poison':
                            return(
                                <i  key={type} className="fas fa-skull-crossbones m-1 text-dark"></i>
                                )
                    case 'bug':
                        return(
                            <i key={type} className="fas fa-spider m-1 text-success"></i>
                        )
                    default:
                        return(
                            <i key={type} className="fab fa-superpowers m-1 text-primary"></i>

                        )
          }
        }
          )}
      </div>
      <p className="PokemonCard__indicator_experience">{props.exp}</p>
        </div>
      <figure className="PokemonCard__container-img">
        <img
          className="PokemonCard__container-img_img"
          src={props.img}
          alt="img_pokemon"
        />
      </figure>
      <div className="PokemonCard__controls">
          <h2 className="PokemonCard__controls_title">{props.name}</h2>
        <button
          id={props.id}
          className="PokemonCard__controls_btn"
          onClick={selectedCard}
        ></button>
      </div>
    </Fragment>
  );
};

export default PokemonCard;
