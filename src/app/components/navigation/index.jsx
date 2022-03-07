import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../config/style.css';
import { useEffect } from 'react';


export default function TopNavBar() {
    const [isActive, setActive] = useState("home");

    function openDrawer() {
        var x = document.getElementById("_topnav");
        if (x.className === "topnav") {
            x.className += " responsive change";
        } else {
            x.className = "topnav";
        }
    }
    
    return (
        <>
            <nav class="topnav" id="_topnav" onClick={openDrawer}>
                <div className="is-active">{isActive}</div>
                <div className="nav-links">
                    <Link to="/experience-proof" className="nav-link" onClick={() => setActive("home")}> 
                        home
                    </Link> 
                    <Link to="/experience-proof/design" className="nav-link" onClick={() => setActive("design")}>
                        design
                    </Link>
                    <Link to="/experience-proof/programming" className="nav-link" onClick={() => setActive("programming")}>
                        programming
                    </Link>
                </div>
                <div class="menu-icon">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </nav>
        </>
    );
}