import * as ApiRun from './api';

const Search = document.getElementById('search');

const GetInput = () => {
  const Input = document.getElementById('data').value;
  ApiRun.GetFromAPI(Input);
  return Input;
};

Search.addEventListener('click', GetInput);