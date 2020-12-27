import React from 'react';
import styled from 'styled-components';
import MostInfo from '../components/MostInfo/MostInfo';
import Leagues from '../components/League/Leagues';

const SideArea = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

function SideBar(props) {
  return (
      <SideArea>
        <Leagues/>
        <MostInfo/>
      </SideArea>
  );
}

export default SideBar;
