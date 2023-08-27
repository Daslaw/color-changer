// NavBar.jsx
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = ({ resetColor }) => {
  return (
    <nav>
      <div className="container">
        <div className="Color_Flipper">
          <h2>Color Flipper</h2>
          <ul className="nav-links d-flex">
            <li>
              <a href="simple-color">Simple</a>
            </li>
            <li>
              <a href='reset-Color' onClick={resetColor}>Hex</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  resetColor: PropTypes.func.isRequired,
};

export default NavBar;
