import React, { FC, ReactElement } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  PieChartOutlined,
  DesktopOutlined
} from '@ant-design/icons';

import './LeftMenu.css';

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
    <div className="left-menu">
      <Menu
        mode="inline"
      >
        <MenuItem icon={<PieChartOutlined />} to="/" name="Dashboard" />
        <MenuItem icon={<DesktopOutlined />} to="/constructor" name="Contructor" /> 
      </Menu>
    </div>
  );
};