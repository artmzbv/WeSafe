import './OurHistory.css';
import copper from '../../images/offer_copper.jpg'

export default function President() {
    return(
        <>
        <section className='history'>
        <div className='history__container'>
            <div className='history__text'>
            <h1 className='history__title'>Notre Histoire</h1>
                <p className='history__description'>
                {`Suite au Covid 19, la fragilité du monde nous est apparue dans toute sa complexité et son absence de stabilité.  Demain étant devenue une inconnue, prévoir seulement via les canaux habituels de la finance, des placements, des banques et autres produits boursiers, immobiliers, monnaies et assurances nous a semblé ne plus être pertinent.`} 
                </p>
                <p className='history__description'>{`Aux vues des directives françaises (France 2030), européenne (Critical Raw Materials ACt), des multiples investissements dans les métaux critiques (Caisse des dépôts…) il nous est apparu pertinent d’acheter des métaux sous formes physique, les stocker, les laisser dormir quelques années puis un jour, les arbitrer.`}</p>
                <p className='history__description'>{`Transformer une partie de l’épargne (qui n’est aujourd’hui que des lignes informatiques) en matières premières de la transition écologique et numérique, nous semble aujourd’hui extrêmement pertinent. Apres quelques mois de travail, nous avons validé l’ensemble des acteurs, professionnels des métaux critiques, industriels, assureurs, transporteurs, etc.`}</p>
            <p className='history__description'>
            {`In Fine, nous avions sans trop le savoir, crée un process complet et sécurisé, d’achat / revente, de logistique et stockage.`}
            </p>
            <p className='history__description'>
                {`Mais, et enfin, malgré notre background dans l’investissement en général, nous ne sommes aujourd’hui qu’un prestataire de service, et en rien une société de conseil, à chacun de faire son choix et prendre ses décisions seul ou accompagné de professionnels du patrimoine, mais ceci n’est en rien notre métier.`}
            </p>
                </div>
                <div className='history__photo'></div>
            </div>
        </section>
        </>
    )
}