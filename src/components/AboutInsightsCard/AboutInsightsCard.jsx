import {React, useState} from 'react'
import './AboutInsightsCard.css';
import { Link} from "react-router-dom";
// import copper from '../../images/copper.jpg'
// import aluminium from '../../images/aluminium.jpg'
// import nickel from '../../images/nickel.jpg'
// import {products} from '../../utils/utils'

export default function AboutInsightsCard({product}) {
    const [hover, setHover] = useState(false)

    return(     
        <Link to={product.link} className='market__card'>
        <img className={`market__image  ${hover ? 'market__image_hover' : null}`}
            src={product.src} 
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            alt={product.title}/>
            <h1 className='market__name' onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>{product.title}</h1>
        </Link>
        )
    }
