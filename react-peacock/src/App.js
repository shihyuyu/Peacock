import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navibar from './components/Navibar';
import MainCover from './components/MainCover';


function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Navibar />
        <MainCover />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
