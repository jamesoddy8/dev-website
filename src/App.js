import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Projects from './pages/Projects/Projects';
import Languages from './pages/Languages/Languages';
import Contact from './pages/Contact/Contact';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/languages" exact component={Languages} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
