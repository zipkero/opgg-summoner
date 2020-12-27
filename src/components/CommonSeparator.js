import React from 'react';
import styled from 'styled-components';

const SeparatorBox = styled.span`
  color: #cdd2d2;
  width: 1px;  
`;

function CommonSeparator({style}) {
  return (
      <SeparatorBox style={style}>|</SeparatorBox>
  );
}

export default CommonSeparator;