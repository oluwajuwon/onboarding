import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom'

const SuccessScreen = ({ firstName, lastName }) => {

  return (
    <div className="success-section">
      <Result
        status="success"
        title={`Onboarding completed, ${firstName} ${lastName}`}
        extra={
          <Link to="/"><Button key="buy">Start Over</Button></Link>
        }
      />
    </div>
  )
}

export default SuccessScreen;
