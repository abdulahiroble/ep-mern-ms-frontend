import React from 'react';
import { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import LoadTicketCollection from 'services/collections/LoadTicketCollection';
import PopOverModal from 'components/Modal';


const AdminTicketList = () => {

    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        async function loadData() {
            setInitialData(await LoadTicketCollection.getAllTickets());
        }

        loadData()
    }, [])

    console.log(initialData.object?.map((item) => item._fields[0].properties.firstname))

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            title: 'Ticket',
            key: 'ticket',
            name: 'ticket',
            render: (_, ticket) => (
                <Space size="middle">
                    <PopOverModal showTicket={ticket} />
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
                ticket: item._fields[0].properties
            })
        })
        return ticketData;
    }

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