import React from 'react';
import {Table} from 'antd';
import {Col} from 'antd';



export default function AdminLogList({data}) {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Login_time',
            dataIndex: 'login_time',
            key: 'login_time'
        }
    ]
    let row = []

    data.data.object.forEach((elm,index) => {
        row.push({
            name: elm._source.firstname,
            email: elm._source.email,
            login_time: elm._source.login_time
        })
        console.log("INITIAL====",elm._source)
    })

    return(
        <Col>
            <Table columns={columns} dataSource={row}/>
        </Col>
    )
  }
  