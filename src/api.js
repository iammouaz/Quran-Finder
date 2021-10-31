// eslint-disable-next-line import/no-cycle
import { CreateModal } from './index';

const API = 'https://api.quran.com/api/v4/';
const String = 'search?q=';
const Counter = document.getElementById('counter');

const GetFromAPI = async (any) => {
  const respone = await fetch(API + String + any);
  const data = await respone.json();
  CreateModal(data.search.results, data.search.results.words);
  Counter.innerHTML += `<h2>Total Result is : ${data.search.total_results} </h2>`;
  console.log(data.search.results);
};

const GetPartenumber = (id) => id.substring(0, id.indexOf(':'));
const GetVersenumber = (id) => id.substring(id.indexOf(':') + 1);

// eslint-disable-next-line import/prefer-default-export
export { GetFromAPI, GetVersenumber, GetPartenumber };
