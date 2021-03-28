import React from 'react';
import { Input, Card } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

export const MessageBox = () => {
  return (
    <TextArea rows={4} />
  );
};