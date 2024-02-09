import './AboutInsights.css';
import { Link} from "react-router-dom";
import copper from '../../images/copper.jpg'
import aluminium from '../../images/aluminium.jpg'
import nickel from '../../images/nickel.jpg'

export default function AboutInsights() {
    return(
        <>
        <section className='market'>
            <h1 className='market__title'>Nos Insights</h1>
            <div className='market__container'>
                <Link to="/copper" className='market__card market__card_copper'>
                <h1 className='market__name'>Copper</h1>
                </Link>
                <Link to="/aluminium" className='market__card market__card_aluminium'>
                <h1 className='market__name'>Aluminium</h1>
                </Link>
                <Link to="/nickel" className='market__card market__card_nickel'>
                <h1 className='market__name'>Nickel</h1>
                </Link>
                </div>
        </section>
        </>
    )
}
