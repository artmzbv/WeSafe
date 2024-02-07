import logo from '../../logo.svg';
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import Offer from "../Offer/Offer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default App;
