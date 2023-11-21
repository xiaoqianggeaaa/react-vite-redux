import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './homPage.less'
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from '@/views/menu/index'
import { useContext, useReducer, useState, useEffect } from 'react';
import { ContextComponent, Context } from '../utils/context';
import { Button } from 'antd';
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const siderStyle = {
    with: '200px',
    backgroundColor: 'white'
};
export const HomePage = () => {
    // sessionStorage.setItem('testContext', JSON.stringify(Context))
    // console.log(JSON.stringify(Context))
    const navigate = useNavigate()


    const [data, setData] = useState({ a: 'xx' })

    useEffect(() => {
        // console.log(JSON.stringify(Context))

    }, [])
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
                height: '100%'
            }}
            size={[0, 48]}
        >
            <Layout style={{ height: '100%' }}>
                <Header style={headerStyle}>Header
                    <Button onClick={() => setData({ a: 'ccc' })}>change</Button>
                </Header>
                <Layout>
                <Outlet></Outlet>

                    <ContextComponent
                    >

                    </ContextComponent>

                </Layout>
            </Layout>
        </Space>
    )
};


const TESTC = (props) => {
    const context = useContext(Context)
    console.log(context, '>>>>>>>>>>>>>>SSS')
    return <div>{props.children}hh</div>
}
