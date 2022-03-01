import { useState, useCallback } from 'react';

import { Widget1 } from './components/Widget1';
import { Widget2 } from './components/Widget2';

import './App.css';
import { StateContextProvider } from './store/useStateHook';

function App() {
  const [counterS, setCounterS] = useState(0);

  const incCounterS = useCallback(
    () => {
      console.log('incrementing shared');
      setCounterS(counterS + 1);
    },
    [counterS, setCounterS]
  );

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <StateContextProvider>
        <Widget1 incCounterS={incCounterS} />
        <Widget2 counterS={counterS} />
      </StateContextProvider>
    </div>
  );
}

export default App;
