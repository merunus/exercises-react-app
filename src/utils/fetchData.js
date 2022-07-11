export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79816cf88emsh3abe3103ee65455p1ed9f0jsnbf59b26e0ad2",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
// process.env.REACT_APP_RAPID_API_KEY

export const optionsYoutube = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79816cf88emsh3abe3103ee65455p1ed9f0jsnbf59b26e0ad2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
