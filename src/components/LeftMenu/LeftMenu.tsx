import React, { FC, ReactElement } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSettings } from "react-icons/fi";
import styled from 'styled-components';

export const LeftMenu: FC = (): ReactElement => {

  const MenuItem = (props: any) => {
    const { to, name, ...restProps } = props;
    return (
      <NavLink to={to} activeClassName="selected">
        <Menu.Item {...restProps}>
          {name}
        </Menu.Item>
      </NavLink>
    )
  }

  return (
    <LeftMenuWrapper>
      <Menu>
        <MenuItem icon={<FiHome />} to="/" name="Dashboard" />
        <MenuItem icon={<FiSettings />} to="/constructor" name="Contructor" /> 
      </Menu>
    </LeftMenuWrapper>
  );
};

const LeftMenuWrapper = styled.div`
  width: 120px;
  height: 100vh;
  z-index: 10;
  padding-top: 105px;
  position: fixed;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 4px 4px 4px rgba(0,0,0,0.1);
  background-color: #fff;

  & .ant-menu {
    height: 100%;

    & .ant-menu-item {
      height: 100px !important;
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      color: #172b4d;
      border-bottom: 1px solid #f0f0f0;
      margin: 0 !important;
      font-weight: 500;

      & .ant-menu-item-icon {
        font-size: 2.5em;
        margin-right: 0;
      }
    }
  }
`;