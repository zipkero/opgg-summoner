import React from 'react';
import styled from 'styled-components';

const GamePlayersInfoBox = styled.div`
  margin-top: 3px;
  margin-left: 4px;
  width: 170px;
  height: 90px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const GamePlayerInfoBox = styled.div`
  width: 80px;
  height: 18px;
`;

function GamePlayersInfo(props) {
  const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
      <GamePlayersInfoBox>
        {players.map(p => (
            <GamePlayerInfoBox>

            </GamePlayerInfoBox>
        ))}
      </GamePlayersInfoBox>
  );
}

export default GamePlayersInfo;
