import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {getKda, getWinRatio} from '../../util/stat';

const MatchTotalRatioBox = styled.div`
  height: 45px;
`;

const MatchTotalRatioTitle = styled.span`
  font-size: 12px;
  color: #666666;
  display: inline-block;
  padding: 16px 0 0 33px;
`;

const MatchTotalStatsBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const MatchGraphBox = styled.div`
  margin-left: 24px;
`;

const MatchKDABox = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MatchKDATotal = styled.div`
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 6px;

  .kill {
    color: #333333;
  }

  .death {
    color: #c6443e;
  }

  .assist {
    color: #333333;
  }

  .slash {
    color: #999999;
  }
`;

const MatchKDARatio = styled.div`
  font-size: 16px;

  span:nth-child(1) {
    font-weight: bold;
    color: #2daf7f;
  }

  span:nth-child(2) {
    color: #c6443e;
  }
`;

function MatchInfoRatioSection() {
  const {summary} = useSelector(state => state.summoner.matchInfo);
  const total = summary.wins + summary.losses;
  const winsDash = getWinRatio(total, summary.wins, 240);
  const winRatio = getWinRatio(total, summary.wins, 100);
  const kda = getKda(summary.kills, summary.assists, summary.deaths);

  return (
      <React.Fragment>
        <MatchTotalRatioBox>
          <MatchTotalRatioTitle>{total}전 {summary.wins}승 {summary.losses}패</MatchTotalRatioTitle>
        </MatchTotalRatioBox>
        <MatchTotalStatsBox>
          <MatchGraphBox>
            <svg width="90px" height="90px" viewBox="0 0 90 90">
              <path d="
                  M 45, 45
                  m -38, 0
                  a 38,38 0 1,0 76,0
                  a 38,38 0 1,0 -76,0
                  "
                    fill="none"
                    stroke="#1f8ecd"
                    strokeWidth="14"
              />

              <path d="
                  M 45, 7
                  a 38 38 0 0 1 0 76
                  a 38 38 0 0 1 0 -76
                  "
                    fill="none"
                    stroke="#ee5a52"
                    strokeWidth="14"
                    strokeDasharray={`${winsDash}, 240`}
              />
            </svg>
          </MatchGraphBox>
          <MatchKDABox>
            <MatchKDATotal>
              <span className="kill">{summary.kills}</span>
              <span className="slash">/</span>
              <span className="death">{summary.deaths}</span>
              <span className="slash">/</span>
              <span className="assist">{summary.assists}</span>
            </MatchKDATotal>
            <MatchKDARatio>
              <span>{kda}:1</span><span>({winRatio}%)</span>
            </MatchKDARatio>
          </MatchKDABox>
        </MatchTotalStatsBox>
      </React.Fragment>
  );
}

export default MatchInfoRatioSection;