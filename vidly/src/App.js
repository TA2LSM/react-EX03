import React, { Component } from 'react';
import Movies from "./components/movies"
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* Aşağıdaki ifade şunun aynısı: <Movies></Movies> 
            Yukarıda import ettiğimiz Movies component'ini basacak */}
        <Movies />
      </main>
    );
  }
}

export default App;
