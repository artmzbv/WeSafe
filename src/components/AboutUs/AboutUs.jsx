import "./AboutUs.css"
import AboutTeam from '../AboutTeam/AboutTeam' 
import President from '../President/President'
import History from '../OurHistory/OurHistory'
import Partners from '../Partners/Partners'

export default function Copper() {
    return(
        <>
        <section>
        <div className="us__topic">
            <h1 className="us__title">Notre Equipe</h1>
            </div>
            <President/>
            <History/>
            <AboutTeam/>
            <Partners/>
        </section>
        </>
    )
}
