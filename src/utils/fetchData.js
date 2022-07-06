export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '1c8f0e1517msh053ef90e2dd56c7p12f206jsn585cb13adde3',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1c8f0e1517msh053ef90e2dd56c7p12f206jsn585cb13adde3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const responce= await fetch(url, options);
  const data = await responce.json();

  return data;
};