import React from 'react';
import styled from 'styled-components';
import CommonImage from '../CommonImage';

const LeagueBox = styled.div`
  width: 300px;
  border-radius: 2px;
  display: flex;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  padding: 10px 8px;
  margin-bottom: 8px;
`;

const TierInfo = styled.ul`
  list-style: none;
  margin: 0 0 0 8px;
  padding: 0;
`;

const TierRankInfo = styled.li`
  &:nth-child(1) {
    margin-top: 6px;
    font-size: 11px;
    color: #879292;
  }

  &:nth-child(2) {
    margin-top: 4px;
    font-family: Helvetica;
    font-size: 15px;
    font-weight: bold;
    color: #1f8ecd;
  }

  &:nth-child(3) {
    margin-top: 6px;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: bold;
    color: #555e5e;

    span {
      font-weight: normal;
    }
  }

  &:nth-child(4) {
    margin-top: 3px;
    font-family: Helvetica;
    font-size: 12px;
    color: #879292;
  }
`;

function League({info}) {
  const tier = info.tierRank;

  return (
      <LeagueBox>
        <CommonImage width="104px" height="104px"
                     src={tier.imageUrl}
                     imgStyle={{
                       width: '104px',
                       height: '104px',
                     }}/>
        <TierInfo>
          <TierRankInfo style={{
            fontSize: '11px',
          }}>{tier.name}</TierRankInfo>
          <TierRankInfo>{tier.tierDivision}</TierRankInfo>
          <TierRankInfo>
            {tier.lp.toLocaleString()}&nbsp;<span>/&nbsp;{info.wins}승 {info.losses}패</span>
          </TierRankInfo>
          <TierRankInfo>승률 {Math.ceil((info.wins / (info.losses + info.wins)) * 100).toFixed(0)}%</TierRankInfo>
        </TierInfo>
      </LeagueBox>
  );
}

export default League;