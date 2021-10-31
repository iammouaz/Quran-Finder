/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import * as ApiRun from './api';
import './style.css';

const Search = document.getElementById('search');
const results = document.getElementById('results');

const CreateModal = (data) => {
  data.forEach((e) => {
    results.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Verse Number is : ${ApiRun.GetVersenumber(e.verse_key)}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Juz Number is :${ApiRun.GetPartenumber(e.verse_key)}</h6>
      <p class="card-text">${(e.text)}</p>
    </div>
    </div>`;
  });
};

const GetInput = async () => {
  const Input = document.getElementById('data').value;
  ApiRun.GetFromAPI(Input);
};

Search.addEventListener('click', GetInput);

export { CreateModal };
