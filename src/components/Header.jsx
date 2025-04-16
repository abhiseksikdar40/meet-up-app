import { Link } from 'react-router-dom';
import logo from '../assets/meetUp-logo.png';

const Header = () => {
  return (
    <>
    <div className='container'>
    <nav className="navbar" style={{ backgroundColor: 'transparent' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="MeetUp Logo" width="40" height="40" className="me-2" />
          <span className="text-light">MeetUp</span>
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="🔍 Search by title & tags"
          />
        </form>
      </div>
    </nav>
     <hr className='text-light'/>
     </div>
     </>
  );
};

export default Header;
