import {React, useState}  from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo_new.jpg"
import './Header.css';
import Navigation from '../Navigation/Navigation'

// https://www.google.com/search?q=position+for+dropdown+list
export default function Header() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [active, setActive] = useState("");
    const handleActiveClick = (e) => {
        setActive(e.target.id);
      }

    const handleToggleBurgerMenu = () =>{
        setIsShowMenu(!isShowMenu);
    }

    return(
        <>
        <header className='header'>
            <Link to="/">
            <img id={"0"} className="header__logo" src={headerLogo} alt="logo" onClick={handleActiveClick} />
            </Link>
            {!isShowMenu ?
            <>
            <div className="header__links-row">
            <Navigation active={active} handleActiveClick={handleActiveClick} />
            </div>
            </>
            : 
            <div className="header__links-column">
            <div  className="header__links-column-container">
            <Navigation isShowMenu={isShowMenu} handleToggleBurgerMenu={handleToggleBurgerMenu} setIsShowMenu={setIsShowMenu} active={active} handleActiveClick={handleActiveClick} />
            </div>
            </div>
            }
        <button className = {`${isShowMenu ? 'header__burger-close-button' : 'header__burger-menu' }`} onClick={()=>handleToggleBurgerMenu()}></button>
        </header>
        </>
    )
}