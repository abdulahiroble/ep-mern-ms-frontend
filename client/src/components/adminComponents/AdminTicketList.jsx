import React from 'react';
import { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import LoadTicketCollection from 'services/collections/LoadTicketCollection';


const AdminTicketList = () => {

    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        async function loadData() {
            setInitialData(await LoadTicketCollection.getAllTickets());
        }

        loadData()
    }, [])

    // console.log(initialData.object._fields.map((ticket) => ticket))
    console.log(initialData.object?.map((item) => item._fields[0].properties.firstname))
    // console.log(initialData?.object?._fields)

    // console.log(initialData?.object?.map((item, index) => item._fields[0].properties.firstname))



    // {initialData.object.map((item, index) => (
    //     <div key={index}>{item._fields[0].properties.firstname}</div>
    //   ))}



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

                        if (status === 'Replied') {
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
    const data2 = () => {
        let ticketData = [];
        initialData.object?.map((item) => {
            ticketData.push({
                key: item._fields[0].properties.id,
                name: item._fields[0].properties.firstname,
                email: item._fields[0].properties.email,
                statuses: ['Replied'],
                msg: item._fields[0].properties.msg
            })
        })
        return ticketData;
    }


    console.log(data2())

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




    return (
        <Table columns={columns} dataSource={data2()} />
    )
}

export default AdminTicketList