/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import * as ApiRun from './api';
import './style.css';

const Search = document.getElementById('search');
const results = document.getElementById('results');

const CreateModal = (data) => {
  data.forEach((e) => {
    results.innerHTML += `<div class="cards text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Verse Number is : ${ApiRun.GetVersenumber(e.verse_key)}</div>
    <div class="card-body">
      <h6 class="card-title">Juz Number is :${ApiRun.GetPartenumber(e.verse_key)}</h6>
      <p class="card-text">${(e.text)}</p>
    </div>
    </div>`;
  });
};

const GetInput = async () => {
  const Input = document.getElementById('data').value;
  await ApiRun.GetFromAPI(Input);
};

Search.addEventListener('click', GetInput);

export { CreateModal };
