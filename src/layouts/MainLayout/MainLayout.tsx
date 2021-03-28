import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Col } from 'antd';

import { TopMenu } from '../../components/TopMenu/TopMenu';
import { LeftMenu } from '../../components/LeftMenu/LeftMenu';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { ConstructorPage } from '../../pages/ConstructorPage/ConstructorPage';

import './MainLayout.css';

export const MainLayout: FC = (): ReactElement => {
  return (
    <div className="main-layout">
      <Layout>
        <TopMenu />
          <LeftMenu />
          <div className="page">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/constructor">
              <ConstructorPage />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  )
};