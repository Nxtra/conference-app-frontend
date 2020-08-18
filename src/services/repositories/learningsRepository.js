import axios from 'axios';

export function postLearning(baseUrl, body) {
  axios.post( baseUrl + '/learnings', body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
      .then(data => {
        resolve(data)
      })
  });
}