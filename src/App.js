import { Widget1 } from './components/Widget1';
import { Widget2 } from './components/Widget2';

import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <Widget1 />
      <Widget2 />
    </div>
  );
}

export default App;
