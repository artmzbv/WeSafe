import "./AboutUs.css"
import AboutTeam from '../AboutTeam/AboutTeam' 
import President from '../President/President'
import History from '../OurHistory/OurHistory'
import Partners from '../Partners/Partners'
import {Helmet} from 'react-helmet-async'

export default function AboutUs() {
    return(
        <>
        <Helmet>
            <title>Notre équipe</title>
            <meta name="description" content="Transformer une partie de l’épargne (qui n’est aujourd’hui que des lignes informatiques) en matières premières de la transition écologique et numérique avec nous: Jerome Thomasse, Christophe Roy, Artem Zubov"></meta>
            <link rel="canonical" href="/about-us"></link>
        </Helmet>
        <section>
        <div className="us__topic">
            <h1 className="us__title">Notre Equipe</h1>
            </div>
            <AboutTeam/>
            {/* <President/> */}
            <History/>
            {/* <Partners/> */}
        </section>
        </>
    )
}
