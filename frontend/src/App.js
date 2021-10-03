import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/video/:id' component={VideoScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
