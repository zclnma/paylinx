import React from 'react';
import { Form, Input, Row, Col, Button, Select, message} from 'antd';
import MediaQuery from 'react-responsive';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;
//const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    submitting: false,
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    this.setState({submitting: true});
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          name: values.name,
          company: values.company,
          email: values.email,
          industry: values.industry,
          prefix: values.prefix,
          number: values.number,
          message: values.message,
        }
        axios.post('/api/email', data)  
          .then(res => {
            this.setState({submitting: false});
            if (res.status === 400) {
              Promise.reject(res);
              return message.error('Something went wrong. Please try again later');
            }
            return message.success('Success')
          })
          .catch(err => {
            this.setState({submitting: false});
            message.error('Something went wrong. Please try again later');
          })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '61',
    })(
      <Select style={{ width: 70 }}>
        <Option value="61">+61</Option>
        <Option value="86">+86</Option>
      </Select>
    );
    // const websiteOptions = autoCompleteResult.map(website => (
    //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    // ));

    return (
      <div id='form'>
      <Form onSubmit={this.handleSubmit}>
      <MediaQuery query='(min-width:501px)'>
      <Row gutter={2}>
          <Col span={12}>
        <FormItem
          label="Name"
        >
          {getFieldDecorator('name', {
            rules: [ {
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
        <Row gutter={2}>
            <Col span={12}>
        <FormItem
          label="Email"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            },
            { required: true, message: 'Please input your email!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        </Col>
        <Col span={12}>
        <FormItem
          label="Phone Number"
        >
          {getFieldDecorator('number', {
            rules: [{ required: true, message: 'Please input phone number!' }],
          })(
              <Input addonBefore={prefixSelector}/>
          )}
        </FormItem>
        </Col>
        </Row>
      </MediaQuery>
      <MediaQuery query='(max-width:500px)'>
        <FormItem
          label="Name"
        >
          {getFieldDecorator('name', {
            rules: [ {
              required: true, message: 'Please input your name.',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Company"
        >
          {getFieldDecorator('company', {
            rules: [{ required: true, message: 'Please input your company.', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Email"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail.',
            },
            { required: true, message: 'Please input your E-mail.' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          label="Phone Number"
        >
          {getFieldDecorator('number', {
            rules: [{ required: true, message: 'Please input phone number.' }],
          })(
              <Input addonBefore={prefixSelector}/>
          )}
        </FormItem>
      </MediaQuery>
        <FormItem
          label="Industry"
        >
              {getFieldDecorator('industry', {
                rules: [{ required: true, message: 'Please input the Industry.' }],
              })(
                <Input />
              )}
        </FormItem>
        <FormItem
          label="Message"
        >
              {getFieldDecorator('message', {
                rules: [{ required: true, message: 'Please input the message.' }],
              })(
                <Input.TextArea rows={4} />
              )}
        </FormItem>
        <div style={{textAlign:'center'}}>
          <Button loading={this.state.submitting} type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;