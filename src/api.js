const API = 'https://api.quran.com/api/v4/';
const String = 'search?q=';

const GetFromAPI = async (any) => {
  const respone = await fetch(API + String + any);
  const search = await respone.json();
  console.log(search);
  return search;
};

// eslint-disable-next-line import/prefer-default-export
export { GetFromAPI };