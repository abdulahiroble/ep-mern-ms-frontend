// ====   MODULS ====
import React from 'react';
import {Button, Form, Input} from 'antd';
import {useNavigate} from 'react-router-dom';



// ==== OTHERS ====
import ApiContext from '../services/ApiContext';
const {TextArea} = Input;

const ContactFormComponent = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const sendRequet = await ApiContext.LoadRequestCollection.sendRequest(values);

    if (sendRequet?.data?.success) {
      alert("Thank you for your message")
      function handleClick() {
        navigate('/');
      }

      handleClick()
    }
  };

  return (
    <Form
      className='form'
      name="Login"
      labelCol={{span: 24}}
      wrapperCol={{span: 24}}
      initialValues={{}}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="firstname"
        rules={[{required: true, message: 'Please input your name!'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{required: true, message: 'Please input your email!'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Text Message"
        name="msg"
        rules={[{required: true, message: 'Please input your message!'}]}
      >
        <TextArea rows={4} placeholder="Max 555 characters" maxLength={555} />
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 24}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ContactFormComponent;
