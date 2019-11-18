import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import BasicQuestionsScreen from './components/BasicQuestionsScreen';
import ExperienceQuestionsScreen from './components/ExperienceQuestionsScreen';
import ShortResponseQuestionScreen from './components/ShortResponseQuestionScreen';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route path='/onboarding/basic' component={BasicQuestionsScreen} />
        <Route path='/onboarding/experience' component={ExperienceQuestionsScreen} />
        <Route path='/onboarding/short-response' component={ShortResponseQuestionScreen} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
