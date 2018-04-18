import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/art">Art</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default Nav