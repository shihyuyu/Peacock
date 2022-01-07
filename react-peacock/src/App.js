import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import CategoriesMenu from './components/CategoriesMenu';
import LoginHomePage from './components/LoginHomePage';
import PopularGigsSlide from './components/PopularGigsSlide';



function App() {
  return (
    <div className="App">
        <Header />
        <CategoriesMenu />
        <LoginHomePage />
        <PopularGigsSlide />
    </div>
  );
}

export default App;
