
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {AppBar} from '../Views/AppBar';
import HomeView from '../Views/HomeView';
import RegisterView from '../Views/RegisterView';
import LoginView from '../Views/LoginView';


export const App = () => {
  return (
    // <div
    //   // style={{
    //   //   height: '100vh',
    //   //   display: 'flex',
    //   //   justifyContent: 'center',
    //   //   alignItems: 'center',
    //   //   fontSize: 40,
    //   //   color: '#010101'
    //   // }}
    // >
      <div> 
        <AppBar />
        <Switch>

          <Route exact paht="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          {/* <Route path="/todos" component={TodosView} /> */}

        </Switch>
              React homework template
    </div>
  );
};
