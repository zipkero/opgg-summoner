import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 1000px;
`;

function Layout({style, children}) {
  return (
      <LayoutBox style={style}>
        {children}
      </LayoutBox>
  );
}

export default Layout;