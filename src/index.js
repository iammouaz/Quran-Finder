import * as ApiRun from './api';

const Search = document.getElementById('search');

const GetInput = () => {
  const Input = document.getElementById('data').value;
  console.log(Input);
};

ApiRun.GetFromAPI();

Search.addEventListener('click', GetInput);