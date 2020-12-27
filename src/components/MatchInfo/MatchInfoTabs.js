import React, {useRef} from 'react';
import styled, {css} from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreator} from '../../module/summoner';

const MatchInfoTabsBox = styled.div`
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #cdd2d2;
  background-color: #f2f2f2;
`;

const MatchInfoTabsListBox = styled.ul`
  margin: 0 0 0 16px;
  list-style: none;
  padding: 0;
  font-family: NanumBarunGothicOTF;
  height: 36px;
  font-size: 12px;
  color: #555555;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MatchInfoTabsItemBox = styled.li`
  cursor: pointer;
  height: 36px;
  line-height: 36px;

  & + & {
    margin-left: 24px;
  }

  ${props => props.active && css`
    color: #1f8ecd;
    font-weight: bold;
    border-bottom: 2px solid #1f8ecd;
  `}
`;

function MatchInfoTabs() {
  const dispatch = useDispatch();
  const {matchActiveTab} = useSelector(state => state.summoner);
  const tabRef = useRef(null);
  const onTabClick = (e) => {
    dispatch(actionCreator.changeMatchTab(e.target.dataset.name));
  };

  return (
      <MatchInfoTabsBox>
        <MatchInfoTabsListBox>
          <MatchInfoTabsItemBox ref={tabRef} data-name="tabAll"
                                onClick={onTabClick}
                                active={matchActiveTab === 'tabAll'}
          >전체</MatchInfoTabsItemBox>
          <MatchInfoTabsItemBox ref={tabRef} data-name="tabSolo"
                                onClick={onTabClick}
                                active={matchActiveTab === 'tabSolo'}
          >솔로게임</MatchInfoTabsItemBox>
          <MatchInfoTabsItemBox ref={tabRef} data-name="tabRank"
                                onClick={onTabClick}
                                active={matchActiveTab === 'tabRank'}
          >자유랭크</MatchInfoTabsItemBox>
        </MatchInfoTabsListBox>
      </MatchInfoTabsBox>
  );
}

export default MatchInfoTabs;