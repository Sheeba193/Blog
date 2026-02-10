import { Link } from 'react-router-dom';  // Importing Link for navigation

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kerubo-Writes Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"> New Blog</Link>
            </div>
        </nav>
     );

    }
export default Navbar;