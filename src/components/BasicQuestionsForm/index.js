import React from 'react';
import { Form, Button, Input, Typography } from 'antd';

const FormItem = Form.Item;
const { Title } = Typography;

const BasicQuestionsForm = props => {
  const { onBasicFormSubmit, form } = props;
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields(async (error, values) => {
      if (!error) onBasicFormSubmit(values);
    });
  }

  return (
    <React.Fragment>

      <div className="form-container">
        <div className="form-header">
        <Title className="form-title">User Onboarding</Title>
          <Title level={3} className="form-subtitle">Part 1/3 - Basic Questions </Title>
        </div>
        <Form onSubmit={event => handleSubmit(event)}>

          <div className="name-fields">

            <FormItem label="First Name" className="first-name">
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please enter your first name!' }],
              })(<Input className="textbox" />)
              }
            </FormItem>

            <FormItem label="Last Name" className="last-name">
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please enter your last name!' }],
              })(<Input className="textbox" />)}
            </FormItem>

          </div>


          <FormItem label="Email">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please enter your email address!' }],
            })(<Input
              type="Email"
              className="textbox"
            />)}
          </FormItem>

          <FormItem label="Phone Number">
            {getFieldDecorator('phoneNumber', {
              rules: [{ required: true, message: 'Please add your phone number!' }],
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
      </div>

    </React.Fragment>
  )
}
const WrappedBasicQuestionsForm = Form.create()(BasicQuestionsForm)
export default WrappedBasicQuestionsForm;
