import React from 'react';
import { Form, Button, Input, Typography } from 'antd';

const { Title } = Typography;
const FormItem = Form.Item;

const ShortResponseQuestionForm = props => {
  const { onShortResponseFormSubmit, form } = props;
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields(async (error, values) => {
      if (!error) onShortResponseFormSubmit(values);
    });
  }

  return (
    <React.Fragment>
      <div className="form-container">

        <div className="form-header">
          <Title className="form-title">User Onboarding</Title>
          <Title level={3} className="form-subtitle">Part 3/3 - Short Response Question</Title>
        </div>

        <Form onSubmit={event => handleSubmit(event)} className="main-form">

        <FormItem label="Why are you interested in software engineering?">
            {getFieldDecorator('response', {
              rules: [{ required: true, message: 'Please provide a response!' }],
            })(<Input.TextArea
              rows={4}
              className="textarea"
            />)}
          </FormItem>

          <FormItem className="btn-div">
            <Button
              type="primary"
              htmlType="submit"
              disabled={false}
              block
            >
              Finish
            </Button>
            </FormItem>

        </Form>
      </div>
    </React.Fragment>
  )
}

const WrappedShortResponseQuestionForm = Form.create()(ShortResponseQuestionForm)
export default WrappedShortResponseQuestionForm;
