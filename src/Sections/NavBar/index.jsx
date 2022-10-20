import './navbar.css';
import Desktop from './Desktop';
import Mobile from './Mobile';

function NavBar() {
  return (
    <div className="navbar-container">
       <Desktop />
        <Mobile />
    </div>
  );
}

export default NavBar;
