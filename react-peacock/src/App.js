import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import CategoriesMenu from './components/CategoriesMenu';
import LoginHomePage from './components/LoginHomePage';



function App() {
  return (
    <div className="App">
        <Header />
        <CategoriesMenu />
        <LoginHomePage />
    </div>
  );
}

export default App;
