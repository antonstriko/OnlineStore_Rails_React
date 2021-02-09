
import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/fontawesome-free-regular";
import {
  faCartArrowDown,
  faCartPlus,
  faHeart as faHeartSolid,
  faTrashAlt
} from "@fortawesome/fontawesome-free-solid";
import FA from "@fortawesome/react-fontawesome";

const FavButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 0 2px transparent,
    0 0 0 0 ${props => (props.isFavorite ? THEME.red : "#fff")};
  color: ${props => (props.isFavorite ? THEME.red : "#fff")};
  cursor: pointer;
  font-size: 1.2em;
  line-height: 1;
  padding: 0;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  &:focus {
    box-shadow: 0 0 0 2px transparent,
      0 0 0 2px ${props => (props.isFavorite ? THEME.red : "#fff")};
    outline: none;
    transition: 0.2s box-shadow;
  }
`;

const ProductImage = (props) => {
    return (
      <>
          <FavButton
            aria-label="favorite button"
            type="button"
            isFavorite={this.state.isFavorite}
            onClick={this._toggleFavorite}
          >
            <FA
              icon={this.state.isFavorite ? faHeartSolid : faHeart}
              aria-label={
                this.state.isFavorite ? "favorited icon" : "add-favorite icon"
              }
            />
          </FavButton>
          <img
            src={props.product.image_url}
            alt={props.product.title}
          />
    </>
    )
}
export default ProductImage