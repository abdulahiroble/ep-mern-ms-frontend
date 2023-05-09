import React from 'react';
import { Button, Space} from 'antd';

const AdminNavavigation = () => {

    return(
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
        >
            <Button type="primary" block>
                Alle Brugere
            </Button>
    
            <Button type="Primary" block>
                Opret Bruger
            </Button>
    
            <Button type="Primary" block>
                Tickets
            </Button>
    
            <Button type="Primary" block>
                Logs
            </Button>
        </Space>
    )
}

export default AdminNavavigation