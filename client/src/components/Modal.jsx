import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import LoadTicketCollection from 'services/collections/LoadTicketCollection';

const PopOverModal = ({ showTicket }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        LoadTicketCollection.saveResponse(values.message, showTicket.ticket.id);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
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
                {/* <p>{`${showTicket.reponse.msg}`}</p> */}
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