import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import SearchHistory from './SearchHistory';
import {useHistory} from 'react-router-dom';

const SearchLayer = styled.div`
  width: 260px;
  height: 32px;
  margin-top: 53px;
  border-radius: 2px;

  background-color: #ffffff;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: 9px 42px 8px 14px;
  font-size: 12px;
  line-height: 15px;
  color: #727272;
  outline: none;
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 54px;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
`;

function Search() {
  const history = useHistory();
  const [summonerName, setSummonerName] = useState('');
  const [histories, setHistories] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const {summonerInfo} = useSelector(state => state.summoner);

  useEffect(() => {
    setSummonerName(summonerInfo?.name);
  }, [summonerInfo]);

  const onInputFocus = (e) => {
    setShowHistory(true);
  };

  const onInputOutFocus = (e) => {
    setTimeout(() => {
      setShowHistory(false);
    }, 100);
  };

  const onChangeSummonerName = (e) => {
    setSummonerName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowHistory(false);
    setHistories(state => {
      if (!state.some(x => x === summonerName)) {
        const newState = state.filter(x => x !== summonerName).concat(summonerName);
        if (newState.length > 5) {
          newState.shift();
        }
        return newState;
      }
      return state;
    });
    history.push(`/${summonerName}`);
  };

  return (
      <SearchLayer>
        <form onSubmit={onSubmit}>
          <SearchInput name="summonerName"
                       value={summonerName}
                       onChange={onChangeSummonerName}
                       onFocus={onInputFocus}
                       onBlur={onInputOutFocus}
                       placeholder="소환사, 챔피언"/>
          <SearchButton type="submit">
            <img height="16" src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"/>
          </SearchButton>
          {showHistory && histories.length > 0 && <SearchHistory histories={histories}/>}
        </form>
      </SearchLayer>
  );
}

export default Search;