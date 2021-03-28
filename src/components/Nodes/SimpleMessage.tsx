import React, { FC, ReactElement, memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import styled from 'styled-components';

export const SimpleMessage = memo(({ data }: any) => {
  return (
    <SimpleMessageWrapper>
      <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </SimpleMessageWrapper>
  );
});

const SimpleMessageWrapper = styled.div`
  background-color: blue;
  padding: 10px;
  color: #fff;
`;