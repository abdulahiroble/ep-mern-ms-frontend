import React from 'react';
import { Space, Table, Tag} from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { statuses }) => (
        <>
            {statuses && statuses.map((status) => {
                let color = ''

                if(status === 'Replied') {
                    color = 'green';
                }
                if (status === 'Awaiting') {
                    color = 'red';
                }
                if (status === 'Closed') {
                    color = 'grey';
                }
                return (
                    <Tag color={color} key={status}>
                    {status.toUpperCase()}
                    </Tag>
                );
            })}
        </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Svar</a>
                <a>Slet</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 'a@a.dk',
        statuses: ['Replied']
    },
    {
        key: '2',
        name: 'Jim Green',
        email: 'b@b.dk',
        statuses: ['Awaiting']
    },
    {
        key: '3',
        name: 'Joe Black',
        email: 'c@c.dk',
        statuses: ['Closed']
    },
];


const AdminTicketList = () => <Table columns={columns} dataSource={data} />;

export default AdminTicketList