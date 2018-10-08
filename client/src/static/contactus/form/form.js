import React from 'react';
import { Form, Input, Row, Col, Button, /*AutoComplete*/ } from 'antd';

import './form.css';
const FormItem = Form.Item;
//const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    //const { autoCompleteResult } = this.state;

    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 8 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 10,
        },
      },
    };

    // const websiteOptions = autoCompleteResult.map(website => (
    //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    // ));

    return (
      <div id='form'>
      <Form onSubmit={this.handleSubmit}>
      <Row gutter={8}>
            <Col span={12}>
        <FormItem
          label="Name"
        >
          {getFieldDecorator('name', {
            rules: [{
              type: 'name', message: 'The input is not valid name!',
            }, {
              required: true, message: 'Please input your name!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        </Col>
        <Col span={12}>
        <FormItem
          label="Company"
        >
          {getFieldDecorator('company', {
            rules: [{ required: true, message: 'Please input your company!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        </Col>
        </Row>
        <Row gutter={8}>
            <Col span={12}>
        <FormItem
          label="Email"
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        </Col>
        <Col span={12}>
        <FormItem
          label="Phone Number"
        >
          {getFieldDecorator('phone number', {
            rules: [{ required: true, message: 'Please input phone number!' }],
          })(
              <Input />
          )}
        </FormItem>
        </Col>
        </Row>
        <FormItem
          label="Industry"
        >
              {getFieldDecorator('industry', {
                rules: [{ required: true, message: 'Please input the Industry you got!' }],
              })(
                <Input />
              )}
        </FormItem>
        <FormItem
          label="Message"
        >
              {getFieldDecorator('industry', {
                rules: [{ required: true, message: 'Please input the Industry you got!' }],
              })(
                <Input.TextArea rows={4} />
              )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;