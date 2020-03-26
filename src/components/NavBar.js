import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <span className="brand-logo">Todo List App</span>
                <ul className="right">
                    <li><Link to="/">Main Todo App</Link></li>
                    <li><Link to="/Motivation">Motivational</Link></li>
                    <li><Link to="/Placeholding">Placeholder</Link></li>
                </ul>
            </div>
        </nav>
    )
}
