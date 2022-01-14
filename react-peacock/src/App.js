import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import CategoriesMenu from './components/CategoriesMenu';
import LoginHomePage from './components/LoginHomePage';
import PopularGigsSlide from './components/PopularGigsSlide';
import GigsRecommendation from './components/GigsRecommendation';
import MidBanner from './components/MidBanner';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
        <Header />
        <CategoriesMenu />
        <LoginHomePage />
        <PopularGigsSlide />
        <GigsRecommendation />
        <MidBanner />
        <Footer />
    </div>
  );
}

export default App;
