const API_KEY = 'bd226217f9af0310bd858f221a2f0b12';

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const result = await fetch(apiUrl, {
    method: 'GET'
  })
    .then(response => response.json())
    .catch(error => console.log(error));

  return await result;
}
