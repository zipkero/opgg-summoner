import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import ChampionsRateInfo from './ChampionsRateInfo';
import ChampionsRecentRatioInfo from './ChampionsRecentRatioInfo';

const MostInfoArea = styled.div`
  width: 300px;
  border-radius: 2px;
  border: 1px solid #cdd2d2;
  background-color: #ededed;
  box-sizing: border-box;
`;

const MostInfoTabs = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const MostInfoTab = styled.li`
  width: 150px;
  height: 44px;
  padding-top: 15px;
  cursor: pointer;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  color: #879292;
  background-color: #f2f2f2;
  border-bottom: 1px solid #cdd2d2;
  & + & {
    border-left: 1px solid #cdd2d2;
  }
  ${props => props.active && css`
    background-color: #ededed;
    border-bottom: none;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: bold;
    color: #5e5e5e;
  `}
`;

function MostInfo(props) {
  const [active, setActive] = useState(0);
  const tabs = ['챔피언승률', '7일간 랭크'];
  const onTabClick = (idx) => {
    if (active !== idx) {
      setActive(idx);
    }
  };
  return (
      <MostInfoArea>
        <MostInfoTabs>
          {tabs.map((t, i) => (
              <MostInfoTab key={t} onClick={() => onTabClick(i)}
                           active={active === i}>{t}</MostInfoTab>
          ))}
        </MostInfoTabs>
        {active === 0 && <ChampionsRateInfo></ChampionsRateInfo>}
        {active === 1 && <ChampionsRecentRatioInfo></ChampionsRecentRatioInfo>}
      </MostInfoArea>
  );
}

export default MostInfo;
