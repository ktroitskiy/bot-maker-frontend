import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Col } from 'antd';
import styled from 'styled-components';

import { TopMenu } from '../../components/TopMenu/TopMenu';
import { LeftMenu } from '../../components/LeftMenu/LeftMenu';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { ConstructorPage } from '../../pages/ConstructorPage/ConstructorPage';

import { Page } from '../../styles/Blocks';

export const MainLayout: FC = (): ReactElement => {
  return (
    <MainLayoutWrapper>
      <Layout>
        <TopMenu />
          <LeftMenu />
          <Page>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/constructor">
              <ConstructorPage />
            </Route>
          </Switch>
        </Page>
      </Layout>
    </MainLayoutWrapper>
  )
};

const MainLayoutWrapper = styled.div`
  height: 100%;

  & .ant-layout {
    height: 100%;
  }
`;