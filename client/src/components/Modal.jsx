import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const PopOverModal = ({ showTicket }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{showTicket}</p>
            </Modal>
        </>
    );
};

export default PopOverModal;