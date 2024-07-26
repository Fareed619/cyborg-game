import { Link } from 'react-router-dom';


import './Header.css';
import logo from '../../assets/images/logo.png';
import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem';

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark">
        <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">

                    <NavItem>
                      <Link to="/" className="nav-link">Home</Link>
                      
                      {/* <a href="/" className="nav-link">Home</a> */}
                      
                    </NavItem>
                    <NavItem>
                      <Link to="/browse" className="nav-link"  >Browser</Link>
                      {/* <a href="/#" className="nav-link">Browser</a> */}
                      
                    </NavItem>
                   <NavItemDropDown>
                    
                     <a href="/detailes" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Fortnight</a></li>
                            <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                        </ul>
                  </NavItemDropDown>
                       
                   
                    <NavItem>
                      <Link to="/detailes" className="nav-link">Streams</Link>
                      {/* <a href="/detailes" className="nav-link">Streams</a> */}
                      </NavItem>

                    <NavItem>
                      <Link to="/profile" className="nav-link">Profile</Link>
                      {/* <a href="/profile" className="nav-link">Profile</a> */}
                      
                    </NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
