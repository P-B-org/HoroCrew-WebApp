import { Link, NavLink } from "react-router-dom";
import { getCurrentUser } from "../../../services/UserService";

export const Navbar = () => {
    return (
        <>
            {
                getCurrentUser
                    ? <div className="dropdown" >
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/">Social Feed</Link></li>
                            <li><Link className="dropdown-item" to="/">Astro Feed</Link></li>
                        </ul>
                    </div >
                    : null}
        </>
    )
}


/*<nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
    <div className="container-fluid">
        <button className="navbar-brand navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            HoroCrew
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/socialfeed"
                    >
                        Social Feed
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/astrofeed"
                    >
                        Astro Feed
                    </NavLink>
                </li>

            </ul>
        </div>
    </div>
</nav> 
);
};*/

