getMovies().then(responseJSON => {
  .then(responseJSON => {
  let body = document.querySelector('body');
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  body.appendChild(pre).appendChild(code);
  code.textContent = JSON.stringify(data, null, ' ');
});

  const movies = responseJSON;
  setMovieGenres(movies);
  console.log('hier is je data om iets mee te gaan doen:', responseJSON);
});

const setMovieGenres = function(movieData) {
  const moviesGenres = movieData.genres;
  moviesGenres.forEach(movieGenre => {
    const listItem = document.createElement('li');
    const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`;
    listItem.appendChild(document.createTextNode(listItemContent));
    document.getElementById('movieGenresList').append(listItem);
  });
};

