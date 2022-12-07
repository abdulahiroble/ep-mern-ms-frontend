// ====   MODULS ====
import React from 'react';
import { Affix, Col, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';

// ==== OTHERS ====
import LoadUserCollection from '../services/collections/LoadUserCollection';

const App: React.FC = () => {
  const navigate = useNavigate();


  const onFinish = async (values: any) => {
    const result = await LoadUserCollection.authenticateUser(values)

    if(result.data.validPassword){
      localStorage.setItem('token',result.data.generatedToken);
      localStorage.setItem('userId',result.data.userId);
      alert("Success")
      navigate("/")
    // CHECK IF ERROR
    }else if(result.data.errorCdoe != ""){
      if(result.data.errorCode == "E101"){
        alert("Wrong email or password")
      }
    }      
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Col>
    <Affix>
      <Navigation/>
      </Affix>
    <Col className='Logincontainer' span={24}>
    <Form
      style={{textAlign: 'center'}}
      className='form'
      name="Login"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <h1>Login</h1>


      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
        <Button type="primary" htmlType="submit" style={{width:"100%"}}>
          Log in
        </Button>
      </Form.Item>
    </Form>
    </Col>
    <Footer/>
    </Col>
  );
};

export default App;