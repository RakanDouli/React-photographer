import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        {" "}
        <Link class="logo" to="/">
          {" "}
          Photo Perfect
        </Link>
      </h1>
      <ul>
        <li>
          {" "}
          <Link to="/"> 1. About Us</Link>
        </li>
        <li>
          {" "}
          <Link to="/work"> 2. Our Work</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact"> 3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  max-height: 10vh;
  display: flex;
  color: red;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #c1c1b7;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    .logo {
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
export default Nav;
