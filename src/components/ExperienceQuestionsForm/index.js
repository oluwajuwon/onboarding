import React from 'react';
import './style.css';
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item;

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
      <div className="form-container">

        <div className="form-header">
          <h1 className="form-title">User Onboarding</h1>
          <h4 className="form-subtitle">Part 2/3 - Experience Questions </h4>
        </div>

        <Form onSubmit={event => handleSubmit(event)} className="main-form">

          <FormItem label="Which College did you go to?">
            {getFieldDecorator('college', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input
              type="Email"
              className="textbox"
            />)}
          </FormItem>

          <FormItem label="What was the last company you worked at?">
            {getFieldDecorator('lastCompany', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input className="textbox" />)}
          </FormItem>

          <FormItem label="How many years of experience do you have?">
            {getFieldDecorator('numYearsExperience', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input className="textbox" />)}
          </FormItem>

          <FormItem>
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
      </div>

    </React.Fragment>
  )
}
const WrappedExperienceQuestionsForm = Form.create()(ExperienceQuestionsForm)
export default WrappedExperienceQuestionsForm;
