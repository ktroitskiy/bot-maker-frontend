import React, { FC, ReactElement, memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Card } from 'antd';
import styled from 'styled-components';

import { MessageBox } from './NodeComponents/MessageBox';
import { NodeActions } from './NodeComponents/NodeActions';

export const SimpleNode = memo(({ data }: any) => {
  return (
    <StyledCard
      size="small"
      extra={NodeActions()}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </StyledCard>
  );
});

const StyledCard = styled(Card)`
  opacity: 0.9;
  min-width: 300px;

  &:hover {
    box-shadow: 0 0 5px 0 #eee;
    opacity: 1;
  }
`;