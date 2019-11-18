import React, { useState } from 'react';
import {
  submitBasicQuestionsResponse,
  submitExperienceQuestionsResponse,
  submitShortResponseQuestion
} from '../../api/RESTAPIClient';
import BasicQuestionsForm from '../BasicQuestionsForm';
import ExperienceQuestionsForm from '../ExperienceQuestionsForm';
import ShortResponseQuestionForm from '../ShortResponseQuestionForm';

const OnboardingScreen = () => {

  const [ showBasicQuestions, setShowBasicQuestions ] = useState(true);
  const [ showExperienceQuestions, setShowExperienceQuestions ] = useState(false);
  const [ showShortResponseQuestions, setShowShortResponseQuestions ] = useState(false);
  const [ userBasicResponse, setUserBasicResponse ] = useState({
    userId: '', firstName: '', lastName: '', email: '', phoneNumber: ''
  });
  const [ userExperienceResponse, setUserExperienceResponse ] = useState({
    userId: '', college: '', lastCompany: '', numYearsExperience: '',
  });
  const [ shortResponse, setShortResponse ] = useState({
    userId: '', response: '',
  });

  const handleBasicFormSubmit = async (userResponse) => {
    try {

      // const response = await submitBasicQuestionsResponse()
      setShowBasicQuestions(false)
      setShowExperienceQuestions(true);
    }catch (error) {

    }
  }

  const handleExperienceFormSubmit = async () => {
    try {
      setShowExperienceQuestions(false);
      setShowShortResponseQuestions(true);
    }catch (error) {
    }
      
  }

  const handleShortResponseFormSubmit = async () => {
    try {

    }catch (error) {
    }
      
  }

  return (
    <React.Fragment>
      {showBasicQuestions && <BasicQuestionsForm onBasicFormSubmit={userResponse => handleBasicFormSubmit(userResponse)} />}
      {showExperienceQuestions && <ExperienceQuestionsForm onExperienceFormSubmit={handleExperienceFormSubmit} />}
      {showShortResponseQuestions && <ShortResponseQuestionForm onShortResponseFormSubmit={handleShortResponseFormSubmit}/>}
    </React.Fragment>
  )
}

export default OnboardingScreen;