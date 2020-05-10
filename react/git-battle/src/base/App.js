import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Battle from '../components/Battle';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  let content = (
    <div>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
  return content;
}


export default App;
