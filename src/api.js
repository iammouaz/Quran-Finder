const API = 'https://api.quran.com/api/v4/search?q=%D8%B9%D9%8A%D8%B3%D9%89';
const String = '?q=';
const any = 'عيسى';

const GetFromAPI = async () => {
  const respone = await fetch(API + String + any);
  const search = await respone.json();
  return search;
};

// eslint-disable-next-line import/prefer-default-export
export { GetFromAPI };