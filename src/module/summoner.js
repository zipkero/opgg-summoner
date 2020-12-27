import createReducer from '../util/createReducer';

export const actionType = {
  loadSummonerInfo: 'summoner/loadSummonerInfo',
  loadSummonerInfoSuccess: 'summoner/loadSummonerInfoSuccess',
  loadSummonerInfoFailure: 'summoner/loadSummonerInfoFailure',

  loadMatchInfo: 'summoner/loadMatchInfo',
  loadMatchInfoSuccess: 'summoner/loadMatchInfoSuccess',
  loadMatchInfoFailure: 'summoner/loadMatchInfoFailure',

  changeMatchTab: 'summoner/changeMatchTab',
};

export const actionCreator = {
  loadSummonerInfo: (summonerName) => ({type: actionType.loadSummonerInfo, payload: summonerName}),
  loadMatchInfo: (summonerName) => ({type: actionType.loadMatchInfo, payload: summonerName}),
  changeMatchTab: (tabName) => ({type: actionType.changeMatchTab, payload: tabName}),
};

const INITIAL_STATE = {
  summonerName: null,
  summonerInfo: null,
  mostInfo: null,
  matchInfo: null,
  matchActiveTab: 'tabAll',
};

const summonerReducer = createReducer(INITIAL_STATE, {
  [actionType.loadSummonerInfo]: (state, action) => {
    return {
      ...state,
      loadSummonerInfoRequest: true,
      loadSummonerInfoError: null,
    };
  },
  [actionType.loadSummonerInfoSuccess]: (state, action) => {
    return {
      ...state,
      loadSummonerInfoRequest: false,
      loadSummonerInfoDone: true,
      summonerInfo: action.payload,
    };
  },
  [actionType.loadSummonerInfoFailure]: (state, action) => {
    return {
      ...state,
      loadSummonerInfoRequest: false,
      loadSummonerInfoDone: false,
      loadSummonerInfoError: action.error,
    };
  },

  [actionType.loadMatchInfo]: (state, action) => {
    return {
      ...state,
      loadMatchInfoRequest: true,
      loadMatchInfoError: null,
    };
  },
  [actionType.loadMatchInfoSuccess]: (state, action) => {
    return {
      ...state,
      loadMatchInfoRequest: false,
      loadMatchInfoDone: true,
      matchInfo: action.payload,
    };
  },
  [actionType.loadMatchInfoFailure]: (state, action) => {
    return {
      ...state,
      loadMatchInfoRequest: false,
      loadMatchInfoError: action.error,
    };
  },

  [actionType.changeMatchTab]: (state, action) => {
    return {
      ...state,
      matchActiveTab: action.payload,
    };
  },
});

export default summonerReducer;