import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import CommonImage from '../components/CommonImage';
import {useSelector} from 'react-redux';

const HeaderArea = styled.div`
  width: 1000px;
  height: 175px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const PlayerInfoBox = styled.div`
  margin: 52px 0 0 17px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const PlayerIdBox = styled.li`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.77px;
  color: #242929;
`;

const PlayerRankBox = styled.li`
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #657070;

  span {
    font-weight: bold;
  }
`;

const PlayerLevelBox = styled.div`
  position: absolute;
  width: 44px;
  height: 24px;
  margin: 98px 38px 0;
  padding: 3px 14px 4px;
  background-image: url("./images/bg-levelbox.png");
  color: #eabd56;
  font-size: 14px;
`;

function Header(props) {
  const {summonerInfo} = useSelector(state => state.summoner);
  return (
      <Layout>
        <HeaderArea>
          <CommonImage width="100px" height="100px" src={summonerInfo.profileImageUrl}
                       style={{
                         marginTop: '41px',
                         width: '120px',
                         height: '120px',
                         display: 'flex',
                         position: 'relative',
                         justifyContent: 'center',
                         alignItems: 'center',
                         backgroundImage: `url("${summonerInfo.profileBorderImageUrl}")`,
                       }}
                       imgStyle={{
                         position: 'relative',
                         zIndex: '-100',
                         width: '100px',
                         height: '100px',
                       }}>
            <PlayerLevelBox>{summonerInfo.level}</PlayerLevelBox>
          </CommonImage>
          <PlayerInfoBox>
            <ul>
              <PlayerIdBox>{summonerInfo.name}</PlayerIdBox>
              {summonerInfo.ladderRank && (
                  <PlayerRankBox>
                    레더 랭킹&nbsp;
                    <span>{summonerInfo.ladderRank.rank.toLocaleString()}</span>
                    위&nbsp;(상위 {summonerInfo.ladderRank.rankPercentOfTop}%)
                  </PlayerRankBox>
              )}
            </ul>
          </PlayerInfoBox>
        </HeaderArea>
      </Layout>
  );
}

export default Header;
