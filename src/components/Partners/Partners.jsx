import './Partners.css';

export default function Partners() {
    return(
        <>
        <section className='partners'>
            <h1 className='partners__title'>Nos Partenaires</h1>
            <div className='partners__container'>
            <div className='partners__card'>
                <div className='partners__logo'></div> 
                <p className='partners__name'> Partner 1</p> 
            </div>
            <div className='partners__card'>
                <div className='partners__logo'></div> 
                <p className='partners__name'>Partner 2</p> 
            </div>
            <div className='partners__card'>
                <div className='partners__logo'></div> 
                <p className='partners__name'>Partner 3</p> 
            </div>
            </div>
        </section>
        </>
    )
}