import {React, useState}  from "react";
import { Route, Link } from "react-router-dom";
import headerLogo from "../../images/logo_new.jpg"
import './Header.css';
import burgerMenu from "../../images/burger.svg"

// https://www.google.com/search?q=position+for+dropdown+list
export default function Header() {
    const [openMetals, setOpenMetals] = useState(false);
    const[active, setActive] = useState("");

    const handleActiveClick = (e) => {
        // event.preventDefault()
        setActive(e.target.id);
      }

    const handleOpenMetals = (e) =>{
        setOpenMetals(true);
        e.preventDefault();  
    }

    const handleCloseMetals =(e)=>{
        setOpenMetals(false);
        e.preventDefault();
    }

    return(
        <>
        <header className='header'>
            <Link to="/">
            <img id={"0"} className="header__logo" src={headerLogo} alt="logo" onClick={handleActiveClick} />
            </Link>
            <div className="header__links">
            {/* <Route exact path="/center"> */}
            <Link id={"1"} className={`header__link ${active === "1" ? "header__link_active" : null}`}  to="/offer" onClick={handleActiveClick} >
                Notre Offre
            </Link>
            {/* &#11206; */}
                <button className={`header__link header__link_button ${active === "2" ? "header__link_active" : "header__link_button-passive"}`} onMouseEnter={handleOpenMetals} onMouseLeave={handleCloseMetals}>Nos Metaux&nbsp;&nbsp;&nbsp;
                {/* <div className={`${openMetals ? 'header__active-pointer' : 'header__passive-pointer' }`}> </div> */}
                {/* <div className='header__pointer'> </div> */}
                {openMetals ? (
                    <nav className="header__dropdown">
                        <ul className="header__dropdown-list">
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e)}}>
                                    <Link id={"2"} className="header__link" to="/copper">
                                    Copper
                                    </Link>
                                  </button>
                            </li>
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e)}}>
                                    <Link id={"2"} className="header__link" to="/aluminium">
                                    Alumnium
                                    </Link>
                                  </button>
                            </li>
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={(e) => {setOpenMetals(false); handleActiveClick(e)}}>
                                    <Link id={"2"} className="header__link" to="/nickel">
                                    Nickel
                                    </Link>
                                  </button>
                            </li>
                            </ul>
                            </nav>
                ) : null}
                </button>
            <Link id={"3"} className={`header__link ${active === "3" ? "header__link_active" : null}`} onClick={(e) => {handleActiveClick(e)}} to="/insights">
                Insights
            </Link>
            <Link id={"4"} className={`header__link ${active === "4" ? "header__link_active" : null}`} onClick={(e) => {handleActiveClick(e)}} to="/about-us">
                Qui sommes-nous?
            </Link>
            <Link id={"5"} className={`header__link ${active === "5" ? "header__link_active" : null}`} onClick={(e) => {handleActiveClick(e)}} to="/contact-us">
                Contactez-nous
            </Link>
        </div>
        </header>
        </>
    )
}