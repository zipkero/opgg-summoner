import summonerReducer from './summoner';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  summoner: summonerReducer,
});

export default rootReducer;