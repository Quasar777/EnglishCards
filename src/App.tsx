import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainCard from './components/MainCard/MainCard';
import VariantCard from './components/VariantCard/VariantCard';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <MainCard />

      <ul className="variants__list">
        <li className="variants__item">
          <VariantCard />
        </li>
        <li className="variants__item">
          <VariantCard />
        </li>
        <li className="variants__item">
          <VariantCard />
        </li>
        <li className="variants__item">
          <VariantCard />
        </li>
        <li className="variants__item">
          <VariantCard />
        </li>
        <li className="variants__item">
          <VariantCard />
        </li>
      </ul>

      <ul className="controls__list">
        <li className="control__item">
          <Button text={"Previous"}/>
        </li>
        <li className="control__item">
          <Button text={"Next"}/>
        </li>
      </ul>
    </div>
  );
}

export default App;
