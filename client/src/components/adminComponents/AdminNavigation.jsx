import React from 'react';
import { Button, Space} from 'antd';
import {Link} from 'react-router-dom'

const AdminNavavigation = () => {

    return(
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
        >
            <Link to="/admin">
            <Button type="primary" block>
                Alle Brugere
            </Button>
            </Link>
    
            <Button type="Primary" block>
                Opret Bruger
            </Button>
    
            <Button type="Primary" block>
                Tickets
            </Button>
            <Link to="/admin/logs">
                <Button type="Primary" block>
                    Logs
                </Button>
            </Link>
        </Space>
    )
}

export default AdminNavavigation