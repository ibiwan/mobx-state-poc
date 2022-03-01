import { useState, useCallback } from 'react';

import { Widget1 } from './components/Widget1';
import { Widget2 } from './components/Widget2';

import './App.css';
import { StateContextProvider } from './store/useStateHook';

function App() {
  const [counterShared, setCounterS] = useState(0);

  const incCounterShared = useCallback(
    () => {
      console.log('incrementing shared');
      setCounterS(counterShared + 1);
    },
    [counterShared, setCounterS]
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
        <Widget1 incCounterShared={incCounterShared} />
        <Widget2 counterShared={counterShared} />
      </StateContextProvider>
    </div>
  );
}

export default App;
