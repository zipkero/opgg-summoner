import React from 'react';
import styled from 'styled-components';
import CommonImage from '../CommonImage';
import CommonSeparator from '../CommonSeparator';

const MatchInfoPositionTitleBox = styled.div`
  margin: 16px;
  height: 14px;
  font-size: 12px;
  color: #666666;
`;

const MatchInfoPositionListBox = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 12px;
`;

const MatchInfoPositionInfoBox = styled.li`
  height: 34px;
  display: flex;
  flex-direction: row;

  & + & {
    margin-top: 20px;
  }
`;

const MatchInfoPositionDetailBox = styled.div`
  margin-left: 8px;
`;

const MatchInfoPositionName = styled.div`
  font-size: 14px;
  color: #333333;
`;

const MatchInfoPositionStatsBox = styled.div`
  .ratio {
    font-size: 11px;
    font-weight: bold;
    color: #1f8ecd;
  }

  .ratioTitle {
    font-size: 11px;
    color: #666666;
  }

  .winRatio {
    margin-left: 6px;
    font-size: 11px;
    font-weight: bold;
    color: #333333;
  }
`;

function MatchInfoPositionSection(props) {
  const positionList = [1, 2];
  return (
      <React.Fragment>
        <MatchInfoPositionTitleBox>선호 포지션(랭크)</MatchInfoPositionTitleBox>
        <MatchInfoPositionListBox>
          {positionList.map(p => (
              <MatchInfoPositionInfoBox>
                <CommonImage src="" width="36px" height="34px"/>
                <MatchInfoPositionDetailBox>
                  <MatchInfoPositionName>탑</MatchInfoPositionName>
                  <MatchInfoPositionStatsBox>
                    <span className="ratio">70%</span>
                    <CommonSeparator style={{
                      height: '12px',
                      margin: '0 6px 0 6px',
                    }}/>
                    <span className="ratioTitle">승률</span>
                    <span className="winRatio">54%</span>
                  </MatchInfoPositionStatsBox>
                </MatchInfoPositionDetailBox>
              </MatchInfoPositionInfoBox>
          ))}
        </MatchInfoPositionListBox>
      </React.Fragment>
  );
}

export default MatchInfoPositionSection;