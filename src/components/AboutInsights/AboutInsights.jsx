import './AboutInsights.css';
import { Link} from "react-router-dom";
import copper from '../../images/copper.jpg'
import aluminium from '../../images/aluminium.jpg'
import nickel from '../../images/nickel.jpg'

export default function AboutInsights() {
    return(
        <>
        <section className='insights'>
            <h1 className='insights__title'>Nos Insights</h1>
            <div className='insights__container'>
                <Link to="/copper" className='insights__card'>
                <h1 className='insights__name'>Copper</h1>
                <img className='insights__image' src={copper} alt="copper"/>
                </Link>
                <Link to="/aluminium" className='insights__card'>
                <h1 className='insights__name'>Aluminium</h1>
                <img className='insights__image' src={aluminium} alt="aluminium"/>
                </Link>
                <Link to="/nickel" className='insights__card'>
                <h1 className='insights__name'>Nickel</h1>
                <img className='insights__image' src={nickel} alt="nickel"/>
                </Link>
                </div>
        </section>
        </>
    )
}
