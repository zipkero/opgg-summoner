import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import {actionType} from '../../module/summoner';
import summonerApi from '../../api/summonerApi';

function* getSummonerInfo(action) {
  try {
    const data = yield call(summonerApi.getInfo, action.payload);
    yield put({type: actionType.loadSummonerInfoSuccess, payload: data.summoner});
  } catch (e) {
    yield put({type: actionType.loadSummonerInfoFailure, error: e.message});
  }
}

function* getMatchInfo(action) {
  try {
    const data = yield call(summonerApi.getMatchInfo, action.payload);
    yield put({type: actionType.loadMatchInfoSuccess, payload: data});
  } catch (e) {
    yield put({type: actionType.loadMatchInfoFailure, error: e.message});
  }
}

export default function* summonerSaga() {
  yield takeLatest(actionType.loadSummonerInfo, getSummonerInfo);
  yield takeEvery(actionType.loadMatchInfo, getMatchInfo);
}