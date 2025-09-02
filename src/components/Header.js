import {BrowserRouter as  Router, Link } from "react-router-dom";
import "../css/header.scss"     

function Header() {
    return (
        <header className="header">
            <div className="headerArea">
                <ul className="gnbGroup">
                    <li className="gnbUnit"><Link to="/">Home</Link></li>
                    <li className="gnbUnit"><Link to="/about">About</Link></li>
                    <li className="gnbUnit"><Link to="/works">Works</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;  