import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="grey darken-4 accent-1">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        SPA-project
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export { Header };