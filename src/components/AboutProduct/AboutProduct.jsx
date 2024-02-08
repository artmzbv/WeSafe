import './AboutProduct.css';
import livraison from '../../images/livraison.jpg'
import stockage from '../../images/stockage.jpg'
import commande from '../../images/commande.jpg'
import selection from '../../images/selection.jpg'

export default function AboutProduct() {
    return(
        <>
        <section className='product'>
            <h1 className='product__title'>Comment ca marche? - 4 etapes</h1>
            <div className='product__container'>
                <div className='product__card'>
                    <h2 className='product__subtitle'>1.Selection</h2>
                    <img className='product__image' src={selection} alt='selection'></img>
                    <p className='product__subtitle'>
                    Vous enregistrez votre demande sur notre application
                    </p>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle'>2.Commande</h2>
                    <img className='product__image' src={commande} alt='commande'></img>
                    <p className='product__subtitle'>
                    La commande est transmise à l'un de nos fournisseurs
                    </p>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle'>3.Livraison</h2>
                    <img className='product__image' src={livraison} alt='livraison'></img>
                    <p className='product__subtitle'>
                    La commande est tranportée et livrée par notre fournisseur
                    </p>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle'>4.Stockage</h2>
                    <img className='product__image' src={stockage} alt='stockage'></img>
                    <p className='product__subtitle'>
                    La marchandise est stockée dans l'un de nos entrepôts ultra-sécurisés
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
