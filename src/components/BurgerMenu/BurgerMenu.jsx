import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function Menu() {

  return (
    <div className='menu menu_active'>
      <div className="menu__wrapper">
        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <li>
              <NavLink
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                to='./offer'
              >Notre Offre</NavLink>
            </li>
            <li>
              <NavLink
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                to='./copper'
              >Nos Metaux</NavLink>
            </li>
            <li>
              <NavLink
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                to='./copper'
              >Insights</NavLink>
            </li>
            <li>
              <NavLink
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                to='./about-us'
              >Qui sommes-nous?</NavLink>
            </li>
            <li>
              <NavLink
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                to='./contact-us'
              >Contactez-nous</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
