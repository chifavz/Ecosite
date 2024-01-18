import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartCount }) => {
  return (
    <>
      <header>
        <h1>E-Commerce App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">
            <FaShoppingCart /> ({cartCount})
          </Link>
        </nav>
      </header>
    </>
  );
};

Header.defaultProps = {
  cartCount: 0,
};

export default Header;
