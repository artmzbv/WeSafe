import './Main.css';
import Intro from "../Intro/Intro"
import AboutProblem from "../AboutProblem/AboutProblem"
import AboutSolution from "../AboutSolution/AboutSolution"
import AboutProduct from "../AboutProduct/AboutProduct"
import AboutTeam from "../AboutTeam/AboutTeam"
import AboutMetals from "../AboutMetals/AboutMetals"
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
            <AboutTeam/>
            <AboutMetals/>
            <AboutRegulation/>
            <AboutQuestions/>
        </main>
        </>
    )
}





