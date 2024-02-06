import React from 'react';
import "../navbar/Header.css";
import heart from "../assets/icons8-сердце-48.png";
import cart from "../assets/icons8-тележка-из-магазина-64.png";
import logo from "../assets/colourful, monogram logotype (2).png";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-list">
          <li className="search-item">
              <div className="search">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="Я ищу..." className="search-input" />
              </div>
            </li>
            <li><img src={heart} alt="heart" /></li>
            <li><img src={cart} alt="cart" /></li>
            
            <li><a href="#">Войти</a></li>
            <li><a href="#">Регистрация</a></li>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
