import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navibar from './components/Navibar';


function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Navibar />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
