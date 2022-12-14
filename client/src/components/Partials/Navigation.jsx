
import React from 'react';
import {Menu} from 'antd';
import {MailOutlined, LoginOutlined, ContactsOutlined, UserAddOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "../../Styles/Button.css"

import AuthService from '../../services/AuthService'

const styling = {
  paddingTop: "5px"
}

const Navigation = () => {
  const navigate = useNavigate();
  const isLoggedIn = AuthService.isLoggedIn();

  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/')
  }
  

  return(
    <Menu mode="horizontal" defaultSelectedKeys={['mail']} theme="dark">

    <Menu.Item key="icon" className="modified-item" style={{width: "10%"}} icon={<img alt="logo" src="/logo.png" style={{width: "40%"}} />}>
    </Menu.Item>
    {/* </Link> */}
    <Link to="/">
      <Menu.Item key="mail" icon={<MailOutlined />} style={styling}>
        Forside
      </Menu.Item>
    </Link>
    <Menu.Item key="Kontakt" icon={<LoginOutlined />} style={styling}>
      <Link to="/contact">
        Kontakt
      </Link>
    </Menu.Item>

    {isLoggedIn.authenticated ? 
    <>
      <Menu.Item key="Login" style={{marginLeft: "auto", paddingTop: "5px"}} icon={<ContactsOutlined />} onClick={logout}>
          Logout
      </Menu.Item>
      <Menu.Item key="Login" style={{ paddingTop: "5px"}} icon={<ContactsOutlined />}>
        <Link to={"/profile/"+isLoggedIn.id}>
          Profile
        </Link>
      </Menu.Item>
      </>
    :
    <>
    <Menu.Item key="Login" style={{marginLeft: "auto", paddingTop: "5px"}} icon={<ContactsOutlined />}>
      <Link to="/login">
        Login
      </Link>
      </Menu.Item>
    <Menu.Item key="Registrer" style={{paddingTop: "5px"}} icon={<UserAddOutlined />}>
      <Link to="/Registration">
        Register
      </Link>
    </Menu.Item>
    </>
    }
    
  </Menu>
  )
}
  


export default Navigation;