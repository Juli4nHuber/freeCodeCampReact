import './App.css';
import logo from './images/logo.svg'
import Button from './components/Button.jsx'
import Screen from './components/Screen';
import ClearButton from './components/ClearButton'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
      setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Error");
    }
  }


  return (
    <div className="App">
      <div className='logo-container'>
          <img
            src={ logo }
            className='logo'
            alt='Logo' />
      </div>
      <div className='calc-container'>
        <Screen input={input}></Screen>
        <div className='row'>
          <Button useClick={addInput}>1</Button>
          <Button useClick={addInput}>2</Button>
          <Button useClick={addInput}>3</Button>
          <Button useClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>4</Button>
          <Button useClick={addInput}>5</Button>
          <Button useClick={addInput}>6</Button>
          <Button useClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>7</Button>
          <Button useClick={addInput}>8</Button>
          <Button useClick={addInput}>9</Button>
          <Button useClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button useClick={calculateResult}>=</Button>
          <Button useClick={addInput}>0</Button>
          <Button useClick={addInput}>.</Button>
          <Button useClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton useClear={() => setInput('')}>AC</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
