import React from 'react';
import {Pagination} from 'antd';

const Paginate = ({current, total, onChange}) => {
    return (
        <>
            <Pagination current={current} total={total} onChange={onChange} />
        </>
    )
}

export default Paginate
