import React from 'react'
import {Card, List} from 'antd';

const {Meta} = Card;

const data = [
    {
        title: 'Music',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];

const Category = ({category}) => {
    // console.log(category)
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{marginTop: "40px"}}>
                    {/* <Card title={item.title}>Card content</Card> */}
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default Category