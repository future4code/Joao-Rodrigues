import './App.css';
import Router from './router/Router'
import { GlobalStyle } from './style/global';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
