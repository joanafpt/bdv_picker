import axios from 'axios';
import axiosRetry from 'axios-retry';

const urlToGetNames =  'https://bdv.glitch.me/api/wines/get-full-list-names';
const urlToGetProducers = 'https://bdv.glitch.me/api/wines/get-full-list-producers';
const urlToGetQualities = 'https://bdv.glitch.me/api/wines/get-full-list-qualities';

const getArrayNames = (myCallback) => {
    axiosRetry(axios, { retries: 5 });
    axios.get(urlToGetNames)
      .then(response => {
        if (myCallback) {
          myCallback(response.data)
          //console.log(response.data);
        }
      })
      .catch(error => {       
        console.log(error, 'error');
      })
  
  }
  
  const getArrayProducers = (myCallback) => {
    axiosRetry(axios, { retries: 5 });
    axios.get(urlToGetProducers)
      .then(response => {
        if (myCallback) {
          myCallback(response.data)
          //console.log(response.data);
        }
      })
      .catch(error => {       
        console.log(error, 'error');
      })
  
  }

  const getArrayQualities = (myCallback) => {
    axiosRetry(axios, { retries: 5 });
    axios.get(urlToGetQualities)
      .then(response => {
        if (myCallback) {
          myCallback(response.data)
          //console.log(response.data);
        }
      })
      .catch(error => {       
        console.log(error, 'error');
      })

  }


  const getArrays = {
    getArrayNames:getArrayNames,
    getArrayProducers: getArrayProducers,
    getArrayQualities:getArrayQualities,
  }

  export default getArrays;
