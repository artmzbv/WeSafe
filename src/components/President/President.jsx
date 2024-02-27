import './President.css';
import jerome from '../../images/aboutteam/photo_jerome.png'

export default function President() {
    return(
        <>
        <section className='president'>
            <div className='president__container'>
                <div className='president__info'>
                <img className='president__photo' src={jerome} alt='president'></img>
                <p className='president__name'>Jerome Thomasse</p>
                <p className='president__profession'>President de WeSafe</p>
                </div>
                <p className='president__description'>
                Je vous prie Mesdames et Messieurs, mes salutations distinguees Je vous prie Mesdames et Messieurs, mes salutations distinguees 
                Je vous prie Mesdames et Messieurs, mes salutations distinguees Je vous prie Mesdames et Messieurs, mes salutations distinguees 
                Je vous prie Mesdames et Messieurs, mes salutations distinguees 
                </p>
            </div>
        </section>
        </>
    )
}
