import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

import style from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = () => {
    navigate(`search/${searchQuery}`);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>Pallavi's Store</h1>
      </div>
      <nav className={style.nav}>
        <ul>
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/products">
            <li>Products </li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us </li>
          </Link>
        </ul>
      </nav>
      <div className={style.leading}>
        <div className={style.search}>
          <input
            type="text"
            className={style.search__input}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={style.search__button} onClick={searchHandler}>
            <svg
              className={style.search__icon}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>
        <Link to="cart">
          <div className={style.cart__button}>
            <IoCartOutline />
          </div>
        </Link>
        <Link to="profile">
          <div className={style.cart__button}>
            <CgProfile />
          </div>
        </Link>
      </div>
    </header>
  );
}
