import React, { useCallback } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { FiMenu } from 'react-icons/fi';

import './NodeActions.css';

const menu = (
  <Menu>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd menu item
    </Menu.Item>
  </Menu>
);

export const NodeActions = () => {
  return (
    <Dropdown overlay={menu}>
      <div className="menu-wrapper">
        <FiMenu />
      </div>
    </Dropdown>
  )
};