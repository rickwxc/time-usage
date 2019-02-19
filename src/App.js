import React, { Component } from 'react';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import DayGrid from './components/DayGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DayGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
