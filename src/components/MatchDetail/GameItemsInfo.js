import React from 'react';
import styled from 'styled-components';
import CommonImage from '../CommonImage';

const GameItemsInfoBox = styled.div`
  width: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameItemListBox = styled.div`
  margin-top: 15px;
  width: 94px;
  height: 46px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GameItemBox = styled.div`
  width: 22px;
  height: 22px;
`;

const GameWardInfoBox = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameWardInfoText = styled.span`
  margin-left: 4px;
  font-size: 11px;
  color: #000000;
`;

function GameItemsInfo(props) {
  const itemList = [1, 2, 3, 4, 5, 6, 7];
  return (
      <GameItemsInfoBox>
        <GameItemListBox>
          {itemList.map(item => (
              <GameItemBox/>
          ))}
        </GameItemListBox>
        <GameWardInfoBox>
          <CommonImage width="16px" height="16px" src="/images/icon-ward-blue.png"/>
          <GameWardInfoText>제어와드</GameWardInfoText>
        </GameWardInfoBox>
      </GameItemsInfoBox>
  );
}

export default GameItemsInfo;