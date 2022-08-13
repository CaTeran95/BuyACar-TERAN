// Importing my own NavBar component:
import NavBar from './components/NavBar/NavBar';
  // Importing Bootstrap CSS styles:
import 'bootstrap/dist/css/bootstrap.min.css';
  // Importing Bootstrap libraries for NavBar component:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from './logo.svg';
import './App.css';
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='explanation'>Este es un ejemplo de NavBar creado por mi</p>
        <NavBar></NavBar>
        <p className='explanation'>Este es el ejemplo de NavBar de Bootstrap modificado</p>
        <Navbar bg="dark" variant="dark" className='menuBg'>
        <Container>
          <Navbar.Brand href="#home">Rent-A-Car</Navbar.Brand>
          <Nav className="me-auto menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
    </div>
  );
}

export default App;
