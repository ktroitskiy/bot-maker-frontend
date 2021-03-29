import React, { FC, ReactElement } from 'react';
import ReactFlow from 'react-flow-renderer';
import styled from 'styled-components';

import { SimpleNode } from '../../components/Nodes/SimpleNode';
import { CustomEdge } from '../../components/Edges/CustomEdge';

import { PanelBlock } from '../../styles/Blocks';


export const ConstructorPage: FC = (): ReactElement => {
  const nodeTypes = {
    simpleNode: SimpleNode
  };

  const edgeTypes = {
    custom: CustomEdge,
  };
  
  const initialElements = [
    {
      id: '1',
      type: 'simpleNode',
      data: {  },
      position: { x: 0, y: 100 },
    },
    {
      id: '2',
      type: 'simpleNode',
      data: { },
      position: { x: 400, y: 400 },
    },
    {
      id: '3',
      type: 'simpleNode',
      data: { },
      position: { x: 800, y: 100 },
    },
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'custom',
      arrowHeadType: 'arrowclosed',
    },
  ];

  return (
    <StyledConstructorPage>
      <ReactFlow 
        elements={initialElements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      />
    </StyledConstructorPage>
  )
};

const StyledConstructorPage = styled(PanelBlock)`
  height: 600px;
  background-color: #0e0e0e;
`;