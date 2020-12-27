import Axios from 'axios';

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/api/summoner/`,
});

const summonerApi = {
  getInfo: async (summonerName) => {
    const resp = await axios.get(`${summonerName}`);
    return resp.data;
  },
  getMostInfo: async (summonerName) => {
    const resp = await axios.get(`${summonerName}/mostInfo`);
    return resp.data;
  },

  getMatchInfo: async (summonerName) => {
    const resp = await axios.get(`${summonerName}/matches`);
    return resp.data;
  },

  getMatchDetailInfo: async ({summonerName, gameId}) => {
    const resp = await axios.get(`${summonerName}/matchDetail/${gameId}`);
    return resp.data;
  },
};

export default summonerApi;