import React, {Component} from 'react';
import './index.less'
import { Layout, Menu, Breadcrumb } from 'antd';



const { Header, Content, Footer } = Layout;


class MainLayout extends Component<any>{
    render(): React.ReactNode {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    типа, контент
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 И все такое </Footer>
            </Layout>
        )
    }
}
export default MainLayout