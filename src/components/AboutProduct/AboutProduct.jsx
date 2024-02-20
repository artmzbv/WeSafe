import './AboutProduct.css';
import livraison from '../../images/livraison.jpg'
import stockage from '../../images/stockage.jpg'
import commande from '../../images/commande.jpg'
import selection from '../../images/selection.jpg'

export default function AboutProduct() {
    return(
        <>
        <section className='product'>
            <h1 className='product__title'>{'Comment fonctionne votre platforme digitale?\n - 4 etapes'}</h1>
            <div className='product__container'>
                <div className='product__card'>
                    <h2 className='product__subtitle'>1.Selection</h2>
                    <img className='product__image' src={selection} alt='selection'></img>
                    <p className='product__description'>
                    Vous choisisez et selectionnez seul ou avec un de nos consultants via WeSafe App
                    </p>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle'>2.Commande</h2>
                    <img className='product__image' src={commande} alt='commande'></img>
                    <p className='product__description'>
                    Après la réservation la commande est transmise à l'un de nos fournisseurs
                    </p>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle product__subtitle_livraison'>3.Livraison et Stockage</h2>
                    <img className='product__image' src={livraison} alt='livraison'></img>
                    <p className='product__description'>
                    La commande est tranportée et livrée par notre fournisseur, puis stockée dans l'un de nos entrepôts ultra-sécurisés
                    </p>
                </div>
                {/* <div className='product__card'>
                    <h2 className='product__subtitle'>4.Stockage</h2>
                    <img className='product__image' src={stockage} alt='stockage'></img>
                    <p className='product__subtitle'>
                    La marchandise est stockée dans l'un de nos entrepôts ultra-sécurisés
                    </p>
                </div> */}
                <div className='product__card'>
                    <h2 className='product__subtitle'>4.Revente</h2>
                    <img className='product__image' src={stockage} alt='stockage'></img>
                    <p className='product__description'>
                    A moyen ou long termes suivant vos objectifs, bénéficier de notre service de revente aupres des industriels
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
