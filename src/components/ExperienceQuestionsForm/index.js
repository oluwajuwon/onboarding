import React from 'react';
import { Form, Button, Input, Typography, Row, Col } from 'antd';

const FormItem = Form.Item;
const { Title } = Typography;

const ExperienceQuestionsForm = props => {
  const { onExperienceFormSubmit, form } = props;
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields(async (error, values) => {
      if (!error) onExperienceFormSubmit(values);
    });
  }
  return (
    <React.Fragment>
      <Row className="form-container">

        <Row className="form-header">
          <Title className="form-title">User Onboarding</Title>
          <Title level={3} className="form-subtitle">Part 2/3 - Experience Questions </Title>
        </Row>

        <Form onSubmit={event => handleSubmit(event)} className="main-form">

          <FormItem label="Which College did you go to?">
            {getFieldDecorator('college', {
              rules: [{ required: true, message: 'Please enter your college!' }],
            })(<Input className="textbox" />)}
          </FormItem>

          <FormItem label="What was the last company you worked at?">
            {getFieldDecorator('lastCompany', {
              rules: [{ required: true, message: 'Please add a company name!' }],
            })(<Input className="textbox" />)}
          </FormItem>

          <FormItem label="How many years of experience do you have?">
            {getFieldDecorator('numYearsExperience', {
              rules: [{ required: true, message: 'Please add your years of experience!' }],
            })(<Input className="textbox" />)}
          </FormItem>

          <FormItem className="btn-div">
            <Button
              type="primary"
              htmlType="submit"
              disabled={false}
              block
            >
              Continue
            </Button>
          </FormItem>

        </Form>
      </Row>

    </React.Fragment>
  )
}
const WrappedExperienceQuestionsForm = Form.create()(ExperienceQuestionsForm)
export default WrappedExperienceQuestionsForm;
