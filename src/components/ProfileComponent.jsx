// ====   MODULS ====
import React from 'react';
import { Button, Form, Input } from 'antd';

// ==== OTHERS ====
import ApiContext from '../services/ApiContext';


const ProfileComponent = (props) => {
    console.log("PROPS====",props.initialData.data.object)
    const initialData = props.initialData.data.object;

    const onFinish = (values) => {
        ApiContext.LoadUserCollection.updateProfile(values);
        
      };
  
      const initialValues = {
        id : initialData?._id,
        firstname : initialData?.firstname,
        lastname : initialData?.lastname,
        address : initialData?.address,
        postal : initialData?.postal,
        number : initialData?.number,
        email : initialData?.email
      }
    return(
            <Form
            className='form'
            name="Login"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={initialValues}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="id"
              name="id"
              hidden={true}
              rules={[{required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Zip"
              name="postal"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="number"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
    )
}

export default ProfileComponent;
