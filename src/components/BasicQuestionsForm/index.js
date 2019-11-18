import React from 'react';
import './style.css';
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item;

const BasicQuestionsForm = (props) => {
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
          <h1 className="form-title">User Onboarding</h1>
          <h4 className="form-subtitle">Part 1/3 - Basic Questions </h4>
        </div>
        <Form onSubmit={event => handleSubmit(event)} className="main-form">

          <div className="name-fields">

            <FormItem label="First Name" className="first-name">
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input className="textbox" />)
              }
            </FormItem>

            <FormItem label="Last Name" className="last-name">
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input className="textbox" />)}
            </FormItem>

          </div>


          <FormItem label="Email">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input
              type="Email"
              className="textbox"
            />)}
          </FormItem>

          <FormItem label="Phone Number">
            {getFieldDecorator('phoneNumber', {
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
const WrappedBasicQuestionsForm = Form.create()(BasicQuestionsForm)
export default WrappedBasicQuestionsForm;