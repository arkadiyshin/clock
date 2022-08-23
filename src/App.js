import { useState } from 'react';
import Clock from './Clock';
import './App.css';

function App() {
  const [showClock, setShowClock] = useState(false);

  const toogleShowClock = () => {
    setShowClock((x) => !x);
  }

  return (
    <div className="App">
      <button onClick={toogleShowClock}>{showClock ? 'hide clock' : 'show clock'}</button>
      {showClock && <Clock />}
    </div>
  );
}

export default App;
