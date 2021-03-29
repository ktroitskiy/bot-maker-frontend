import React, { useCallback } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

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
      <NodeActionsMenuWrapper>
        <FiMenu />
      </NodeActionsMenuWrapper>
    </Dropdown>
  )
};

const NodeActionsMenuWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  margin-left: 10px;
`;