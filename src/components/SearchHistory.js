import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SearchHistoryBox = styled.div`
  position: absolute;
  top: 36px;
  border-radius: 2px;
  z-index: 10000;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  height: 100px;
  width: 260px;
  overflow-y: scroll;

  ul {
    list-style: none;
    margin: 0;
    padding: 7px 15px 7px 15px;
  }

  li {
    color: #666;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

function SearchHistory({histories}) {
  return (
      <SearchHistoryBox>
        <ul>
          {histories.map(h => (
              <li key={h}>
                <Link to={`/${h}`}>{h}</Link>
              </li>
          ))}
        </ul>
      </SearchHistoryBox>
  );
}

export default SearchHistory;