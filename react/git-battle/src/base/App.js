import React from 'react';
import { Global, Container } from '../assets/styles/App';
import MyButton from '../components/MyButton';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const App = () => {

  let content = (
      <div>
        <Header />
        <Navigation />
        <Menu />
        <Footer />
      </div>
    );
  return content;
}


export default App;
