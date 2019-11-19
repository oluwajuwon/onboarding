import React, { useState, useMemo } from 'react';
import { Alert } from 'antd';
import {
  submitBasicQuestionsResponse,
  submitExperienceQuestionsResponse,
  submitShortResponseQuestion
} from '../../api/RESTAPIClient';
import BasicQuestionsForm from '../BasicQuestionsForm';
import ExperienceQuestionsForm from '../ExperienceQuestionsForm';
import ShortResponseQuestionForm from '../ShortResponseQuestionForm';
import SuccessScreen from '../SuccessScreen';

const OnboardingScreen = () => {

  const [ newUserId, setNewUserId] = useState(0);
  const [ showBasicQuestions, setShowBasicQuestions ] = useState(true);
  const [ showExperienceQuestions, setShowExperienceQuestions ] = useState(false);
  const [ showShortResponseQuestions, setShowShortResponseQuestions ] = useState(false);
  const [ showSuccessResponse , setShowSuccessResponse] = useState(false);

  const [ userBasicResponse, setUserBasicResponse ] = useState({
    userId: '', firstName: '', lastName: '', email: '', phoneNumber: ''
  });
  const [ userExperienceResponse, setUserExperienceResponse ] = useState({
    userId: '', college: '', lastCompany: '', numYearsExperience: '',
  });
  const [ userShortResponse, setUserShortResponse ] = useState({
    userId: '', response: '',
  });

  const incrementUserId = useMemo(() => {
    return newUserId + 1
  }, [newUserId])
  
  const handleBasicFormSubmit = async (userResponse) => {
    const userId = incrementUserId;
    const { firstName, lastName, email, phoneNumber } = userResponse;

    try {
      const response = await submitBasicQuestionsResponse(userId, firstName, lastName, email, phoneNumber);

      setShowBasicQuestions(false);
      setShowExperienceQuestions(true);
      setUserBasicResponse(response.savedResponse);

    } catch (error) {
      return <Alert message={error.message} type="error" />
    }
  }

  const handleExperienceFormSubmit = async (userResponse) => {
    const userId = incrementUserId;
    const { college, lastCompany, numYearsExperience } = userResponse;

    try {
      const response = await submitExperienceQuestionsResponse(userId, college, lastCompany, numYearsExperience);

      setShowExperienceQuestions(false);
      setShowShortResponseQuestions(true);
      setUserExperienceResponse(response.savedResponse);

    } catch (error) {
      return <Alert message={error.message} type="error" />
    }
  }

  const handleShortResponseFormSubmit = async (userResponse) => {
    const userId = incrementUserId;
    const { response } = userResponse;

    try {
      const apiResponse = await submitShortResponseQuestion(userId, response);

      setShowShortResponseQuestions(false);
      setShowSuccessResponse(true);
      setUserShortResponse(apiResponse.savedResponse);

    } catch (error) {
      return <Alert message={error.message} type="error" />
    }
  }

  return (
    <React.Fragment>
      {showBasicQuestions &&
        <BasicQuestionsForm onBasicFormSubmit={userResponse => handleBasicFormSubmit(userResponse)} />}

      {showExperienceQuestions &&
        <ExperienceQuestionsForm onExperienceFormSubmit={userResponse => handleExperienceFormSubmit(userResponse)} />}

      {showShortResponseQuestions &&
        <ShortResponseQuestionForm onShortResponseFormSubmit={userResponse => handleShortResponseFormSubmit(userResponse)}/>}

      {showSuccessResponse && <SuccessScreen firstName={userBasicResponse.firstName} lastName={userBasicResponse.lastName} />}

    </React.Fragment>
  )
}

export default OnboardingScreen;
