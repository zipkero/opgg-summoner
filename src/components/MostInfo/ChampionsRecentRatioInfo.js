import React from 'react';
import ChampionRateInfoTemplate from './ChampionRateInfoTemplate';
import {infoDetailStyle, infoTitleStyle} from '../../common/constStyle';
import CommonImage from '../CommonImage';

const ChampionRecentGraph = () => {
  return (
      <div style={{
        width: '123px',
        height: '24px',
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
          backgroundColor: '#1f8ecd',
          height: '100%',
          width: '50%',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          paddingInlineStart: '4px',
        }}>
          4승
        </div>
        <div style={{
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          backgroundColor: '#ee5a52',
          height: '100%',
          width: '50%',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#ffffff',
          display: 'flex',
          paddingInlineEnd: '4px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          4승
        </div>
      </div>
  );
};
const ChampionRecentRatioInfo = () => {
  return (
      <ChampionRateInfoTemplate>
        <CommonImage width="32px" height="32px" src=""/>
        <div style={infoTitleStyle}>신지드</div>
        <div style={infoDetailStyle}>69%</div>
        <ChampionRecentGraph/>
      </ChampionRateInfoTemplate>
  );
};

function ChampionsRecentRatioInfo(props) {
  const champions = [1, 2, 3, 4];
  return (
      <React.Fragment>
        {champions.map(c => <ChampionRecentRatioInfo/>)}
      </React.Fragment>
  );
}

export default ChampionsRecentRatioInfo;