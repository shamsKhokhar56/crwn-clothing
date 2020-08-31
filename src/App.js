import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';


// class App extends Component { 
function App() {
  // render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>

        </Switch>
      </div>
    );
  // }
}

export default App;
