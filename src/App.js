import React, {useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './layout/Header';
import Gnb from './layout/Gnb';
import Content from './layout/Content';
import Footer from './layout/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {actionCreator} from './module/summoner';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #ededed;
  }
`;

const AppLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
  margin-bottom: 10px;
`;

function SearchContent({match}) {
  const dispatch = useDispatch();
  const {summonerInfo} = useSelector(state => state.summoner);

  useEffect(() => {
    dispatch(actionCreator.loadSummonerInfo(match.params.summonerName));
  }, [match.params.summonerName, dispatch]);

  return (
      <React.Fragment>
        {summonerInfo && (
            <React.Fragment>
              <Header/>
              <Hr/>
              <Content/>
            </React.Fragment>
        )}
      </React.Fragment>
  );
}

function App() {
  return (
      <React.Fragment>
        <GlobalStyle/>
        <AppLayout>
          <BrowserRouter>
            <Route path="/" component={Gnb}/>
            <Route path="/:summonerName" component={SearchContent}/>
          </BrowserRouter>
          <Footer/>
        </AppLayout>
      </React.Fragment>
  );
}

export default App;
