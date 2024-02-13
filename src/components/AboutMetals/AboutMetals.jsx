import './AboutMetals.css';

export default function AboutMetals() {
    return(
        <>
        <section className='metals'>
        <div className='metals__container'>
            <h1 className='metals__title'>Pourquoi les metaux ?</h1>
            <div className='metals__description'>
            <p className='metals__paragraph'>
            Metaux critiques constitue la base de la transition energetique: batteries, mode de transport, industries, ENR, bâtiment, Internet
            </p>
            <p className='metals__paragraph'>
            La sécurisation de ces métaux représente un enjeu de souveraineté majeur ainsi qu’une opportunité d’investissement exceptionnelle.
            </p>
            <p className='metals__paragraph'>
            Les prix des metaux vont augmenter au cours des 20 prochaines années
            </p>
            </div>
            </div>
            <div className='metals__graphics'></div>
        </section>
        </>
    )
}
