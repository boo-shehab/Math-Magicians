import { NavLink } from 'react-router-dom';

const NavLinkStyle = {
  color: 'white',
  'text-decoration': 'none',
  'font-size': '24px',
  cursor: 'pointer',
};

const NavBar = () => (
  <nav style={{
    display: 'flex',
    'align-items': 'center',
    textDecoration: 'none',
    padding: '15px',
    width: '240px',
    'flex-direction': 'column',
    'background-color': 'lightseagreen',
    color: 'white',
  }}
  >
    <h1>Math Magicians</h1>
    <nav>
      <ul style={{
        display: 'flex',
        'list-style': 'none',
        gap: '20px',
        'text-decoration': 'none',
        'flex-direction': 'column',
        'margin-top': '100px',
        'text-align': 'center',
      }}
      >
        <li>
          <NavLink to="/" style={NavLinkStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" style={NavLinkStyle}>calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote" style={NavLinkStyle}>quote</NavLink>
        </li>
      </ul>
    </nav>
  </nav>
);

export default NavBar;
