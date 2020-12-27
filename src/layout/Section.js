import React, {useEffect} from 'react';
import styled from 'styled-components';
import MatchInfo from '../components/MatchInfo/MatchInfo';
import MatchDetailList from '../components/MatchDetailList';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreator} from '../module/summoner';

const SectionArea = styled.div`
  width: 690px;
  display: flex;
  flex-direction: column;
`;

function Section(props) {
  const dispatch = useDispatch();
  const {summonerInfo, matchInfo} = useSelector(state => state.summoner);
  useEffect(() => {
    dispatch(actionCreator.loadMatchInfo(summonerInfo.name));
  }, [summonerInfo]);
  return (
      <SectionArea>
        {matchInfo && (
            <React.Fragment>
              <MatchInfo/>
              <MatchDetailList/>
            </React.Fragment>
        )}
      </SectionArea>
  );
}

export default Section;