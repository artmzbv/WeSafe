import './President.css';
import jerome from '../../images/photo_jerome.png'

export default function President() {
    return(
        <>
        <section className='president'>
            <h1 className='president__title'>Le mot du President</h1>
            <div className='president__container'>
                <img className='president__photo' src={jerome} alt='president'></img>
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
