import './AboutRegulation.css';

export default function AboutRegulation() {
    return(
        <>
        <section className='regulation'>
            <h1 className='regulation__title'>Nous protegeons vos transactions</h1>
            <div className='regulation__container'>
                <h2 className='regulation__subtitle'>Nous travaillons selon ces documents</h2> 
                <ul className='regulation__list'>
                    <li className='regulation__item'>Document A</li>
                    <li className='regulation__item'>Document B</li>
                    <li className='regulation__item'>Document C</li>
                </ul>
            </div>
        </section>
        </>
    )
}
