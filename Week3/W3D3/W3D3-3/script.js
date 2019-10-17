getMovies().then(responseJSON => {
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
