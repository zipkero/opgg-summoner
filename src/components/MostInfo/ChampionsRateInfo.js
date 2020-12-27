import React from 'react';
import styled from 'styled-components';
import ChampionRateInfoTemplate from './ChampionRateInfoTemplate';
import {infoDetailStyle, infoTitleStyle} from '../../common/constStyle';
import CommonImage from '../CommonImage';

const ChampionInfoBox = styled.div`
  width: 95px
`;

const ChampionKdaBox = styled.div`
  width: 76px
`;

const ChampionRateInfo = () => {
  return (
      <ChampionRateInfoTemplate>
        <CommonImage src=""/>
        <ChampionInfoBox>
          <div style={infoTitleStyle}>신지드</div>
          <div style={infoDetailStyle}>CS 67.8(2.4)</div>
        </ChampionInfoBox>
        <ChampionKdaBox>
          <div style={infoTitleStyle}>2.47:1 평점</div>
          <div style={infoDetailStyle}>4.3 / 6.1 / 10.7</div>
        </ChampionKdaBox>
        <div>
          <div style={infoTitleStyle}>69%</div>
          <div style={infoDetailStyle}>35게임</div>
        </div>
      </ChampionRateInfoTemplate>
  );
};

function ChampionsRateInfo(props) {
  const champions = [1, 2, 3, 4];
  return (
      <React.Fragment>
        {champions.map(c => <ChampionRateInfo/>)}
      </React.Fragment>
  );
}

export default ChampionsRateInfo;
