import {React, useState} from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AboutUs from "../AboutUs/AboutUs"
import Main from "../Main/Main"
import Offer from "../Offer/Offer"
import CopperProduct from "../CopperProduct/CopperProduct"
import AluminiumProduct from "../AluminumProduct/AluminiumProduct"
import NickelProduct from "../NickelProduct/NickelProduct"
import ContactUs from "../ContactUs/ContactUs"
import Insights from "../Insights/Insights"
import Article from "../Article/Article"
import PageNotFound from "../PageNotFound/PageNotFound";
import BurgerMenu from "../BurgerMenu/BurgerMenu"

function App() {
  return (
    <div className="App App__opacity">
      <Header/>
      <BurgerMenu/>
      <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route exact path="/offer" element={<Offer/>} />
      <Route exact path="/copper" element={<CopperProduct/>} />
      <Route exact path="/aluminium" element={<AluminiumProduct/>} />
      <Route exact path="/nickel" element={<NickelProduct/>} /> {/* Возмножно тут тоже можно через metals/copper  - можно потом сделать при желании*/}
      <Route exact path="/insights" element={<Insights/>} /> {/* Надо прописать динамический роут с id новостей */}
      <Route exact path="/insights/:date/:title" element={<Article/>}/> 
      <Route exact path="/about-us" element={<AboutUs/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
