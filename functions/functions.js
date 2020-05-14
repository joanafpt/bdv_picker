import axios from 'axios';
import axiosRetry from 'axios-retry';

const commonUrl = 'https://bdv.glitch.me/api/wines/';
const pathToComplete = 'get-full-list?fulllist=Enviar'; //ok
const pathAndParamsToName = 'find-a-wine/?wname='; //ok
const pathAndParamsToProducer = 'list-by-producer/?prod='; //ok
const pathAndParamsToQuality = 'list-by-type-of-wine/?qual='; //ok


const getCompleteDataFromApi = (callback) => {
  axiosRetry(axios, { retries: 5 });
  // axios.get('https://bdv.glitch.me/api/wines/get-full-list?fulllist=Enviar')
  axios.get(commonUrl + pathToComplete)
    .then(response => {
      console.log(response.data);
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(error, 'error');
    })
}

const getDataNameFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  // axios.get('https://bdv.glitch.me/api/wines/find-a-wine/?wname=' + enteredInput)
  axios.get(commonUrl + pathAndParamsToName + enteredInput)
    .then(response => {
      if (callback) {
        callback(response.data);


      }
    })

    .catch(error => {
      //  setIsLoading(false); // igual situação
      console.log(error, 'error');

    })
}

const getDataProducerFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  // axios.get('https://bdv.glitch.me/api/wines/list-by-producer/?prod=' + enteredInput)
  axios.get(commonUrl + pathAndParamsToProducer + enteredInput)
    .then(response => {
      //console.log(response.data);
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      //  setIsLoading(false); // igual
      console.log(error, 'error');
    })
}

const getDataQualityFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  // axios.get('https://bdv.glitch.me/api/wines/list-by-type-of-wine/?qual=' + enteredInput)
  axios.get(commonUrl + pathAndParamsToQuality + enteredInput)
    .then(response => {
      if (callback) {
        callback(response.data)
      }
    })
    .catch(error => {
      //  setIsLoading(false); //same here
      console.log(error, 'error');
    })

}

const functions = {
  getCompleteDataFromApi: getCompleteDataFromApi,
  getDataNameFromApi: getDataNameFromApi,
  getDataProducerFromApi: getDataProducerFromApi,
  getDataQualityFromApi: getDataQualityFromApi,
}

export default functions;