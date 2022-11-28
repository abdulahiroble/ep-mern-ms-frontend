import React from 'react'
import {Card, List} from 'antd';

const {Meta} = Card;


const Category = ({musicCategory, artsCategory, miscellaneous}) => {

    const data = [
        {
            title: musicCategory?.data?.name,
            src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        },
        {
            title: artsCategory?.data?.name,
            src: "https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80"
        },
        {
            title: miscellaneous?.data?.name,
            src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        }
    ];

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
                    <Card
                        hoverable
                        cover={<img alt="example" src={item.src} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default Category