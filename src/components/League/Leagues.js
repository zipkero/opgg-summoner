import React from 'react';
import styled from 'styled-components';
import League from './League';
import {useSelector} from 'react-redux';

const LeaguesArea = styled.div`
  display: flex;
  flex-direction: column;
`;

function Leagues(props) {
  const {leagues} = useSelector(state => state.summoner?.summonerInfo);
  return (
      <LeaguesArea>
        {leagues.map((l, idx) => <League key={idx} info={l}/>)}
      </LeaguesArea>
  );
}

export default Leagues;