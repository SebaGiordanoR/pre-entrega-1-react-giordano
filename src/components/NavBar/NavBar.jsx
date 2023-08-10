import React from "react"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg d-flex justify-content-around">
            <a className="navbar-brand" href="#"><img src="./src/LogoNoName.png" alt="" /></a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Sahumerios</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Kits</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Lecturas</a></li>
                </ul>   
            <div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar