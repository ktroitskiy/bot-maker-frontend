import React, { FC, ReactElement, useEffect, useState, useCallback } from 'react';
import ReactFlow from 'react-flow-renderer';

import { SimpleMessage } from '../../components/Nodes/SimpleMessage';

import './ConstructorPage.css';

export const ConstructorPage: FC = (): ReactElement => {
  const nodeTypes = {
    simpleMessage: SimpleMessage
  };
  
  const initialElements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
    {
      id: '2',
      type: 'simpleMessage',
      data: { text: 'Another Node' },
      position: { x: 100, y: 125 },
    },
  ];

  return (
    <div className="constructor-page panel-block">
      <ReactFlow 
        elements={initialElements}
        nodeTypes={nodeTypes}
      />
    </div>
  )
};