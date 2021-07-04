import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { TestComponent } from './components/TestComponent';
import { setAxios } from './utils/setAxios'

function App() {

  useEffect(()=>{
    console.log('gadjo')
    setAxios()
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
