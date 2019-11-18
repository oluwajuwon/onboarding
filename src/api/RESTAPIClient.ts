const submitBasicQuestionsResponse = async (
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string
) => {
  return new Promise((resolve, reject) => {
    resolve({
      submissionStatus: "success",
      savedResponse: {
        userId,
        firstName,
        lastName,
        email,
        phoneNumber
      }
    });
  });
};

const submitExperienceQuestionsResponse = async (
  userId: string,
  college: string,
  lastCompany: string,
  numYearsExperience: string
) => {
  return new Promise((resolve, reject) => {
    resolve({
      submissionStatus: "success",
      savedResponse: {
        userId,
        college,
        lastCompany,
        numYearsExperience
      }
    });
  });
};

const submitShortResponseQuestion = async (
  userId: string,
  response: string
) => {
  return new Promise((resolve, reject) => {
    resolve({
      submissionStatus: "success",
      savedResponse: {
        userId,
        response
      }
    });
  });
};

module.exports = {
  submitBasicQuestionsResponse,
  submitExperienceQuestionsResponse,
  submitShortResponseQuestion
};
