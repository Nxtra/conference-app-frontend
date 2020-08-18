import axios from 'axios';

const LEARNINGS_ENDPOINT = '/learnings';

export async function postLearning(baseUrl, body) {
  await axios.post(baseUrl + LEARNINGS_ENDPOINT, body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getAllLearnings(baseUrl) {
  let data;
  await axios.get(baseUrl + LEARNINGS_ENDPOINT)
    .then(function (response) {
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}