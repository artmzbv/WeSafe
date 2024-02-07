import {React} from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AboutUs from "../AboutUs/AboutUs"
import Main from "../Main/Main"
import Offer from "../Offer/Offer"
import Copper from "../Copper/Copper"
import ContactUs from "../ContactUs/ContactUs"
import Insights from "../Main/Main"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route exact path="/offer" element={<Offer/>} />
      <Route exact path="/copper" element={<Copper/>} />
      <Route exact path="/insights" element={<Insights/>} />
      {/* Надо прописать динамический роут с id новостей */}
      <Route exact path="/about-us" element={<AboutUs/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
