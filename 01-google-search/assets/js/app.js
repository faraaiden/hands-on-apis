const getAllProducts = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'US',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': /* YOUR API KEY */
    }
  };
  
  fetch('https://google-search3.p.rapidapi.com/api/v1/search/q=codecademy', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

getAllProducts();
