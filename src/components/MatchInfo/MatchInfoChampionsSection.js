import React from 'react';
import styled, {css} from 'styled-components';
import CommonImage from '../CommonImage';
import CommonSeparator from '../CommonSeparator';
import {useSelector} from 'react-redux';
import {getKda, getWinRatio} from '../../util/stat';

const MatchInfoChampionBox = styled.div`
  display: flex;
  height: 34px;

  & + & {
    margin-top: 12px;
  }
`;

const MatchInfoChampionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const MatchInfoChampionInfoTitleBox = styled.div`
  height: 16px;
  font-size: 14px;
  color: #333333;
  margin-bottom: 3px;
`;

const MatchInfoChampionInfoStatsBox = styled.div`
  height: 13px;
  font-size: 11px;

  .ratio {
    /* 점수에 따라 색 변경 필요 */
    color: #c6443e;
  }

  .stats {
    margin-left: 6px;
    color: #555555;
  }

  .kda {
    /* 점수에 따라 색 변경 필요 */
    ${props => props.kda > 3.0 && css`
      color: #2daf7f;
    `} ${props => props.kda > 4.0 && css`
      color: #1f8ecd;
    `} ${props => props.kda > 5.0 && css`
      color: #c6443e;
    `}
  }
`;

function MatchInfoChampionsSection(props) {
  const {champions} = useSelector(state => state.summoner.matchInfo);
  return (
      <React.Fragment>
        {champions.map(c => (
            <MatchInfoChampionBox key={c.id}>
              <CommonImage src={c.imageUrl} width="34px" height="34px" imgStyle={{
                width: '34px',
                height: '34px',
              }}/>
              <MatchInfoChampionInfoBox>
                <MatchInfoChampionInfoTitleBox>
                  {c.name}
                </MatchInfoChampionInfoTitleBox>
                <MatchInfoChampionInfoStatsBox kda={getKda(c.kills, c.assists, c.deaths)}>
                  <span className="ratio">{getWinRatio(c.games, c.wins)}%</span>
                  <span className="stats">({c.wins}승 {c.losses}패)</span>
                  <CommonSeparator style={{
                    height: '11px',
                    marginLeft: '6px',
                    marginRight: '6px',
                  }}/>
                  <span className="kda">{getKda(c.kills, c.assists, c.deaths)} 평점</span>
                </MatchInfoChampionInfoStatsBox>
              </MatchInfoChampionInfoBox>
            </MatchInfoChampionBox>
        ))}
      </React.Fragment>
  );
}

export default MatchInfoChampionsSection;