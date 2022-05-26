const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.main-search__find');

const getAllData = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'US',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': /* YOUR API KEY */,
    },
  };

  try {
    const response = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchInput.value}`,
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

/*
============================
Redirect to search-result.html
============================
*/
const redirect = () => {
  window.location.href = '/search-result.html';
};

/*
======================
Search all input value
======================
*/
// Click button
if (searchBtn) {
  searchBtn.addEventListener('click', redirect);
}

// Or by pressing 'Enter' key
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    // Trigger the button element with a click
    searchBtn.click();
  }
});
