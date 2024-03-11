import './LegalNotice.css';

function App() {
    return (
      <section className="notice">
        <div className="notice__topic">
                <h1 className="notice__title">Mentions légales</h1>
        </div>
        <div className='notice__info'>
        <h2 className='notice__subtitle'>Site</h2>
        <p className='notice__text'>
        {`Le site WeSafe est édité par la société WeSafe, société par actions simplifiée au capital de SOMME 
        immatriculée au R.C.S de Paris sous le numéro 915 236 640, dont le siège social est situé au ADRESSE 
        et qui peut être contactée par email à l’adresse suivante : EMAIL
        Directeur de publication : DIRECTEUR
        L’hébergement du site est assuré par la société SOCIETE, société par actions simplifiée dont le siège social est situé ADRESSE_INSURANCE.`}
        </p>
        <h2 className='notice__subtitle'>Absence de couverture des risques</h2>
        <p className='notice__text'>
        {`‍Conformément au règlement (UE) 2020/1503 du Parlement européen et du Conseil, la société WeSafe a établi une procédure de gestion des conflits d’intérêts. 
        La société WeSafe n’a aucune participation dans une quelconque offre de financement participatif sur sa plateforme.
        La société WeSafe n’accepte comme porteurs de projets en lien avec les services de financement participatif sur sa plateforme de financement participatif aucune des personnes suivantes :
        a) ses associés détenteurs de 20 % ou plus du capital social ou des droits de vote ;
        b) ses dirigeants ou salariés ;
        c) toute personne physique ou morale liée à ces associés, dirigeants ou salariés par une relation de contrôle au sens de l’article 4, paragraphe 1, point 35) b), de la directive 2014/65/UE du Parlement européen et du Conseil.
        Des procédures internes ont été mises en place par BLAST pour s’assurer du respect de ces règles.
        Pour toute question à ce sujet, vous pouvez nous contacter via l’adresse EMAIL.
        Mentions légales au DATE`}
        </p>
        </div>
      </section>
  );
}

export default App;