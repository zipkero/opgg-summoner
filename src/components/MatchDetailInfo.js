import React from 'react';
import styled, {css} from 'styled-components';
import GameStatsInfo from './MatchDetail/GameStatsInfo';
import GamePlayersInfo from './MatchDetail/GamePlayersInfo';
import GameItemsInfo from './MatchDetail/GameItemsInfo';
import GameRecordInfo from './MatchDetail/GameRecordInfo';
import GameChampionInfo from './MatchDetail/GameChampionInfo';
import GameKDAInfo from './MatchDetail/GameKDAInfo';

const MatchDetailInfoBox = styled.div`
  width: 690px;
  height: 96px;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const GameDetailInfoBox = styled.div`
  width: 660px;
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* 조건에 따라 색 변경 필요 */
  ${props => props.isWin === true && css`
    border-top: solid 1px #a1b8cd;
    border-bottom: solid 1px #a1b8cd;
    border-left: solid 1px #a1b8cd;
    background-color: #b0ceea;
  `} 
  ${props => props.isWin === false && css`
    border-top: solid 1px #c0aba8;
    border-bottom: solid 1px #c0aba8;
    border-left: solid 1px #c0aba8;
    background-color: #d6b5b2;
  `}
`;

const MatchMoreInfoBox = styled.div`
  width: 30px;
  height: 96px;
  
  ${props => props.isWin === true && css`
    border: solid 1px #549dc7;
    background-color: #7fb0e1;
  `}
  ${props => props.isWin === false && css`
    border: solid 1px #c8817c;
    background-color: #e89c95;
  `}
`;

function MatchDetailInfo({gameInfo}) {
  return (
      <MatchDetailInfoBox>
        <GameDetailInfoBox isWin={gameInfo.isWin}>
          <GameRecordInfo/>
          <GameChampionInfo/>
          <GameKDAInfo/>
          <GameStatsInfo/>
          <GameItemsInfo/>
          <GamePlayersInfo/>
        </GameDetailInfoBox>
        <MatchMoreInfoBox isWin={gameInfo.isWin}/>
      </MatchDetailInfoBox>
  );
}

export default MatchDetailInfo;