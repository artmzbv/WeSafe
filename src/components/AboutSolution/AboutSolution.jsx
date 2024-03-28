import './AboutSolution.css';
import {React, useState, useRef, useEffect}  from "react";
// import graphics from '../../images/graphics.png'

export default function AboutSolution() {
    const [isIntersectingPic, setIsIntersectingPic] = useState(false);
    
    const picRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingPic(entry.isIntersecting);
        },{ rootMargin: "0px" });
        observer.observe(picRef.current);
        return () => observer.disconnect();
      }, []);
    

    return(
        <>
        <section className='solution'>
            <h1 className='solution__title'>{'Transformez votre épargne en métaux industriels de la transition numérique et énergétique'}</h1>
            <div className='solution__container'>
                <ul className='solution__list'>
                    <li className='solution__item'>
                        Épargne alternative
                    </li>
                    <li className='solution__item'>
                        Participation à l'amélioration des filières
                    </li>
                    <li className='solution__item'>
                        Création d'un stock pour les industriels de France
                    </li>
                    <li className='solution__item'>
                        Transparence
                    </li>
                </ul>
                <div className={`solution__graph  ${isIntersectingPic ? 'solution__graph_hover' : null}`}   ref={picRef}>
                    {/* <img className='solution__graphics' src={graphics}></img> */}
                </div>
            </div>
        </section>
        </>
    )
}