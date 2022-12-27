import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Page from './Page';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={2} href="/">Home</Nav.Link>
                <Nav.Link eventKey={2} href="page">Page</Nav.Link>
                <Nav.Link eventKey={2} href="about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/page' element={< Page />}></Route>
          <Route exact path='/about' element={< About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;