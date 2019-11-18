import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import OnboardingScreen from './components/OnboardingScreen';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <Header />
        <Switch>
          <Route exact path='/' component={WelcomeScreen} />
          <Route exact path='/onboarding' component={OnboardingScreen} />
          <Route component={NotFound} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
