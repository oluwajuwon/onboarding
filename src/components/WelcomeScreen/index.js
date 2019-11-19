import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Typography } from 'antd';

const { Text, Title } = Typography;

const WelcomeScreen = () => {

  const [ showFooterMessage, setShowFooterMessage ] = useState(true);

  useEffect(() => {
    handleFooterMessageShow();
  }, [])

  const handleFooterMessageShow = () => {
    setTimeout(() => {
      setShowFooterMessage(false);
    }, 3000 )
  }

  return (
    <React.Fragment>
      <div className="welcome-screen">
        <Title level={3}>Welcome to my Onboarding code challenge</Title>
        <Link to="/onboarding">
          <Button type="primary">
            Start onboarding
            <Icon type="right" />
          </Button>
        </Link>
      </div>

      {showFooterMessage && 
        <div className="footer-message">
          <Text>visit my github <a href="https://github.com/oluwajuwon" target="_blank" rel="noopener noreferrer">here</a></Text>
        </div>
      }
    </React.Fragment>
  )
}

export default WelcomeScreen;
