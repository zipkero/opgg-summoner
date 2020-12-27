import React from 'react';
import styled from 'styled-components';
import MatchDetailInfo from './MatchDetailInfo';
import {useSelector} from 'react-redux';

const MatchDetailListBox = styled.div`
  width: 690px;
`;

function MatchDetailList(props) {
  const {games} = useSelector(state => state.summoner.matchInfo);
  return (
      <MatchDetailListBox>
        {games.map(g => (
            <MatchDetailInfo key={g.gameId} gameInfo={g}/>
        ))}
      </MatchDetailListBox>
  );
}

export default MatchDetailList;