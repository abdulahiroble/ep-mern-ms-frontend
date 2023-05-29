import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import LoadTicketCollection from 'services/collections/LoadTicketCollection';

const PopOverModal = ({ showTicket }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState([]);

    const onFinish = async (values) => {
        console.log('Success:', values);
        LoadTicketCollection.saveResponse(values.message, showTicket.ticket.id);

        if(process.env.REACT_APP_ENVIRONMENT_PROD == "false"){
            const mailServiceUrl = "http://127.0.0.1:7071/api/HttpExample?requesttype=response"

            const header = {
                "method": "POST",
                "body": JSON.stringify({
                    ticketId: showTicket.ticket.id,
                    firstname: showTicket.ticket.firstname,
                    email: showTicket.ticket.email,
                    ticketMsg: showTicket.ticket.msg,
                    ticketResponse: values.message
                })
            }
            try {
                fetch(mailServiceUrl, header);
            } catch (e) {
                console.log(e)
            }
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = async () => {
        setIsModalOpen(true);
        const getResponse = await LoadTicketCollection.getResponse();
        console.log(getResponse)
        getResponse?.map((response) => {
            if (response.nodeA.id === showTicket.ticket.id) {
                setResponse(`Admin: ${response.nodeB.msg}`)
            }
        })
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Åben ticket
            </Button>
            <Modal title="Ticket" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{`${showTicket.ticket.firstname}: ${showTicket.ticket.msg}`}</p>
                {response}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="message"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default PopOverModal;