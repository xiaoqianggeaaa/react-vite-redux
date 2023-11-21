import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
function getMenuList() {
    const menuList = JSON.parse(sessionStorage.getItem('menuList')) || []
    return menuList.map(item => {
       return getItem(item.menuName, item.url,<PieChartOutlined />)
    })

}

const App = () => {
    return (
        <Menu
            mode="inline"
            style={{
                width: 200,
            }}
            onSelect={({ item, key, keyPath, selectedKeys, domEvent })=>{
                console.log( key)
            }}
            items={getMenuList()}
        />
    );
};
export default App;