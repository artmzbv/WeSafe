import {React, useState} from 'react';
import {useParams} from 'react-router-dom'
import './Article.css';
import {insights} from '../../utils/utils'

export default function Article() {
    const {title, date} = useParams();
    const insight = insights.find(f => f.title.replace(/\s+/g, '-').toLowerCase() === title && f.date.replace(/\./g, '-').toLowerCase() === date);
    return(
        <>
        <section className='article'>
        <div className="article__topic">
            <h1 className="article__topic-title">Nouvelles&Insights</h1>
                <h2 className="article__topic-subtitle">Suivez  les dernières mises à jour sur le marché avec nous !</h2>
            </div>
            <div className='article__container'>
                <h1 className='article__title'>{insight.title}</h1> 
                <p className='article__date'>{insight.date}</p>
                <p className='article__brief'>{insight.brief}</p>
                <img className="article__picture" src={insight.src}></img>
                <p className='article__description'>{insight.description}</p>
            </div>
        </section>
        </>
    )
}