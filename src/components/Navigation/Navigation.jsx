import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({active, handleActiveClick, isShowMenu, setIsShowMenu}) {
    const [openMetals, setOpenMetals] = useState(false);

    const handleToggleMetals = (e) =>{
        setOpenMetals(!openMetals);
        e.preventDefault();  
    }

    const handleCloseBurgerMenu = () =>{
        return isShowMenu ? setIsShowMenu(false) : null
    }

    const handleCloseMetalsBurgerMenu = (e) =>{
        return isShowMenu ? handleToggleMetals(e) : null 
    }


  return (
    <>
    <Link id={"1"} className={`navigation__link navigation__link_main ${active === "1" ? "navigation__link_active" : null}`}  to="/offer" onClick={(e) => { handleActiveClick(e); handleCloseBurgerMenu()}}>
        Notre Offre
    </Link>
        <button className={`navigation__link navigation__link_main navigation__link_button 
        ${!openMetals ? 'navigation__button-dropped' : 'navigation__button-undropped' } 
        ${active === "2" ? "navigation__link_active" : "navigation__link_inactive"}`} 
        onMouseEnter={handleToggleMetals} 
        onMouseLeave={handleToggleMetals} 
        onClick={handleCloseMetalsBurgerMenu}>
            Nos Metaux&nbsp;&nbsp;&nbsp;
        {openMetals ? (
            <nav className="navigation__dropdown">
                <ul className="navigation__dropdown-list">
                    <li className="navigation__dropdown-item">
                          <button className='navigation__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e); handleCloseBurgerMenu()}}>
                            <Link id={"2"} className="navigation__link" to="/copper">
                            Copper
                            </Link>
                          </button>
                    </li>
                    <li className="navigation__dropdown-item">
                          <button className='navigation__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e); handleCloseBurgerMenu()}}>
                            <Link id={"2"} className="navigation__link" to="/cobalt">
                            Cobalt
                            </Link>
                          </button>
                    </li>
                    <li className="navigation__dropdown-item">
                          <button className='navigation__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e); handleCloseBurgerMenu()}}>
                            <Link id={"2"} className="navigation__link" to="/nickel">
                            Nickel
                            </Link>
                          </button>
                    </li>
                    </ul>
                    </nav>
        ) : null}
        </button>
    <Link id={"3"} className={`navigation__link navigation__link_main ${active === "3" ? "navigation__link_active" : null}`} onClick={(e) => {handleActiveClick(e); handleCloseBurgerMenu()}} to="/insights">
        Insights
    </Link>
    <Link id={"4"} className={`navigation__link navigation__link_main ${active === "4" ? "navigation__link_active" : null}`} onClick={(e) => {handleActiveClick(e); handleCloseBurgerMenu()}} to="/about-us">
        Qui sommes-nous?
    </Link>
    <Link id={"5"} className={`navigation__link navigation__link_main ${active === "5" ? "navigation__link_active" : null}`} onClick={(e) => {handleActiveClick(e); handleCloseBurgerMenu()}} to="/contact-us">
        Contactez-nous
    </Link>
    </>
  );
}

export default Navigation;