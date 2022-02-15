import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Services from './components/ServicesComponent';
import Schedule from './components/ScheduleComponent';
import Reviews from './components/ReviewsComponent';
import Footer from './components/FooterComponent';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <Schedule />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
