import './App.css';
import logo from './images/logo.svg'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const setClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCount = () =>  {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img
          className='logo'
          src={logo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button
          text='Click'
          isButtonClick={true}
          setClick={setClick}
        />
        <Button
          text='Restart'
          isButtonClick={false}
          setClick={restartCount}
        />
      </div>
    </div>
  );
}

export default App;
