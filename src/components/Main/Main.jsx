import './Main.css';
import Intro from "../Intro/Intro"
import AboutProblem from "../AboutProblem/AboutProblem"
import AboutSolution from "../AboutSolution/AboutSolution"
import AboutProduct from "../AboutProduct/AboutProduct"
import AboutMetals from "../AboutMetals/AboutMetals"
import AboutInsights from "../AboutInsights/AboutInsights"
import AboutTeam from "../AboutTeam/AboutTeam"
import AboutRegulation from "../AboutRegulation/AboutRegulation"
import AboutQuestions from "../AboutQuestions/AboutQuestions"


export default function Main() {
    return(
        <>
        <main>
            <Intro/>
            <AboutProblem/>
            <AboutSolution/>
            <AboutProduct/>
            <AboutMetals/>
            <AboutInsights/>
            <AboutTeam/>
            <AboutRegulation/>
            <AboutQuestions/>
        </main>
        </>
    )
}





