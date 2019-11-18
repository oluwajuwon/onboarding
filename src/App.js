import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import BasicQuestionsScreen from './components/BasicQuestionsScreen';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route path='/onboarding' component={BasicQuestionsScreen} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
