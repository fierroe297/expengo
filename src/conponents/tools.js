import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

        return <nav className="navbar bg-dark container">
            <h4><Link to="AboutPage">Home</Link></h4>
            <h4>About Page</h4>
            <h4>Sentiment Page</h4>


        </nav>

}

export default Navbar;