import {React, useState} from 'react'
import './AboutInsights.css';
import { Link} from "react-router-dom";
import {products} from '../../utils/utils'
import AboutInsightsCard from '../AboutInsightsCard/AboutInsightsCard';

export default function AboutInsights() {

    return(
        <>
        <section className='market'>
            <h1 className='market__title'>Notre Catalogue</h1>
            <div className='market__container'>
            {products.map((product) =>
            <AboutInsightsCard key={product.title} product={product}/>
            )}
            </div>
                {/* <Link className='market__link-insights' to="/insights">
                <button className='market__subtitle'>Voyez aussi nos insights sur le marche &rarr;</button>
                </Link> */}
        </section>
        </>
    )
}
