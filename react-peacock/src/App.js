import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import CategoriesMenu from './components/CategoriesMenu'


function App() {
  return (
    <div className="App">
        <Header />
        <CategoriesMenu />
    </div>
  );
}

export default App;
