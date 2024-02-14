import {React, useState}  from "react";
import { Route, Link } from "react-router-dom";
import headerLogo from "../../images/logo_new.jpg"
import './Header.css';

// https://www.google.com/search?q=position+for+dropdown+list
export default function Header() {
    const [openMetals, setOpenMetals] = useState(false);
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
            <img className="header__logo" src={headerLogo} alt="logo" />
            </Link>
            <div className="header__links">
            {/* <Route exact path="/center"> */}
            <Link className="header__link" to="/offer">
                Notre Offre
            </Link>
            {/* &#11206; */}
                <button className ="header__link header__link_button " onMouseEnter={handleOpenMetals} onMouseLeave={handleCloseMetals}>Nos Metaux&nbsp;&nbsp;&nbsp;
                {/* <div className={`${openMetals ? 'header__active-pointer' : 'header__passive-pointer' }`}> </div> */}
                {/* <div className='header__pointer'> </div> */}
                {openMetals ? (
                    <nav className="header__dropdown">
                        <ul className="header__dropdown-list">
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={() => {setOpenMetals(false)}}>
                                    <Link className="header__link" to="/copper">
                                    Copper
                                    </Link>
                                  </button>
                            </li>
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={() => {setOpenMetals(false)}}>
                                    <Link className="header__link" to="/aluminium">
                                    Alumnium
                                    </Link>
                                  </button>
                            </li>
                            <li className="header__dropdown-item">
                                  <button className='header__dropdown-button' onClick={() => {setOpenMetals(false)}}>
                                    <Link className="header__link" to="/nickel">
                                    Nickel
                                    </Link>
                                  </button>
                            </li>
                            </ul>
                            </nav>
                ) : null}
                </button>
            <Link className="header__link" to="/insights">
                Insights
            </Link>
            <Link className="header__link" to="/about-us">
                Qui sommes-nous?
            </Link>
            <Link className="header__link" to="/contact-us">
                Contactez-nous
            </Link>
        </div>
        </header>
        </>
    )
}