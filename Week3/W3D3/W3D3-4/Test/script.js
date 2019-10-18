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

// Opdracht: Maak eerst aparte functies voor het ophalen van je data.
// Bijvoorbeeld: getTopRatedMovies() of getTopRatedActionMovies()

// HOE DIT MOET SNAP IK op dit moment NIET!!!

// Haal 1 film op op basis van de film ID (dus niet het genre ID)
// (hoe kun je de ID achterhalen?).

// ID Achterhalen via imdb wellicht?
