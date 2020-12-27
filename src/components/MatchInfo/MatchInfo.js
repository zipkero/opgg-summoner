import React from 'react';
import styled from 'styled-components';
import MatchInfoTabs from './MatchInfoTabs';
import MatchInfoRatioSection from './MatchInfoRatioSection';
import MatchInfoChampionsSection from './MatchInfoChampionsSection';
import MatchInfoPositionSection from './MatchInfoPositionSection';

const MatchInfoArea = styled.div`
  width: 690px;
  height: 194px;
  box-sizing: border-box;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const MatchInfoContent = styled.div`
  height: 158px;
  display: flex;
  flex-direction: row;
`;

const MatchInfoSection = styled.div`
  & + & {
    border-left: 1px solid #cdd2d2;
  }
`;

function MatchInfo() {
  return (
      <MatchInfoArea>
        <MatchInfoTabs/>
        <MatchInfoContent>
          <MatchInfoSection style={{
            width: '276px',
            height: '100%',
          }}>
            <MatchInfoRatioSection/>
          </MatchInfoSection>
          <MatchInfoSection style={{
            width: '228px',
            height: '100%',
            padding: "16px",
          }}>
            <MatchInfoChampionsSection/>
          </MatchInfoSection>
          <MatchInfoSection style={{
            width: '184px',
            height: '100%',
          }}>
            <MatchInfoPositionSection/>
          </MatchInfoSection>
        </MatchInfoContent>
      </MatchInfoArea>
  );
}

export default MatchInfo;
