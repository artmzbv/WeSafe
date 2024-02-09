import "./Offer.css"
import image from '../../images/offer_copper.jpg'

export default function Offer() {
    return(
        <>
        <section className="offer">
            <div className="offer__topic">
                <h1 className="offer__title">Dès le premier trimestre 2024, vous pourrez accéder à notre service achat de CUIVRE, qui vous permettra</h1>
            </div>
            <div className="offer__card">
                <div className="offer__card-image"></div>
                <h1 className="offer__card-title">D’accéder à un marché normalement réservé aux industriels</h1>
                <p className="offer__card-description">avec des montants d’investissement faibles (inferieur a 30 k euros en propriété réelle) et des possibilités régulières d’augmenter les investissements ou de diversifier le portefeuille avec de nouveaux métaux critiques</p>
            </div>
            <div className="offer__card">
                <div className="offer__card-image"></div>
                <h1 className="offer__card-title">D’avoir un avantage concurrentiel pertinent,</h1>
                <p className="offer__card-description">en participant à la création du premier stock physique privé de métaux critiques en parallèle du Metal Raw Critical Act 2023 (UE), de la création des stocks stratégiques (ex :Caisses des Dépôts) et du Plan d’Investissement France 2030</p>
            </div>
            <div className="offer__card">
                <div className="offer__card-image"></div>
                <h1 className="offer__card-title">De permettre une diversification du portefeuille de vos clients,</h1>
                <p className="offer__card-description">sur un marché en dollar au cours du London Metal Exchange</p>
            </div>
            <div className="offer__card">
                <div className="offer__card-image"></div>
                <h1 className="offer__card-title">D’offrir un placement de « bon père de famille »,</h1>
                <p className="offer__card-description"> en transformant une partie de l’argent placé dans les banques exposée aux risques financiers, en matière première physique à fort potentiel</p>
            </div>
        </section>
        </>
    )
}
