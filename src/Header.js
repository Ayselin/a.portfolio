import React from "react";
import {Link} from "react-router";


export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="nav navbar-nav">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}