import { Widget1 } from './components/Widget1';
import { Widget2 } from './components/Widget2';

import './App.css';
import { StateContextProvider } from './store/useStateHook';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <StateContextProvider>
        <Widget1 />
        <Widget2 />
      </StateContextProvider>
    </div>
  );
}

export default App;
