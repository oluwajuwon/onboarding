import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import OnboardingScreen from './components/OnboardingScreen';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route path='/onboarding' component={OnboardingScreen} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
