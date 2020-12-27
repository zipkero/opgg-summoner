import React from 'react';
import styled from 'styled-components';

const ChampionRateInfoBox = styled.div`
  width: 298px;
  height: 53px;
  background-color: #ededed;
  & + & {
    border-top: 1px solid #cdd2d2;;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

function ChampionRateInfoTemplate({children}) {
  return (
      <ChampionRateInfoBox>{children}</ChampionRateInfoBox>
  );
}

export default ChampionRateInfoTemplate;
