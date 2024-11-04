import { Link, NavLink } from "react-router-dom";
import { navItems } from "../constants/navItems";

const Navbar = () => {

    const getLinkStyle = props => props.isActive
        ? { color: 'gold', paddingBottom: '5px', borderBottom: '1px solid' }
        : { color: 'white' }
    ;

    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Proyecto
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map(item => (
                            <li className="nav-item" key={item.id + item.name}>
                                <NavLink className="nav-link" to={item.route} style={getLinkStyle}>
                                    {item.name}
                                </NavLink>
                            </li>                            
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
