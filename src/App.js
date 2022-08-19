// Importing my own NavBar component:
import NavBar from './components/NavBar/NavBar';

import {CartWidget} from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

// Importing Bootstrap CSS styles:
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import './App.css';
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer message="This is a test!"/>
      </header>
    </div>
  );
}

export default App;
