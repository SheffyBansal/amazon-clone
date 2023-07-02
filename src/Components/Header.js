import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const[{basket}] = useStateValue();
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Sheffy</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__basketCount">{basket?basket.length:0}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
