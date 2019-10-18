// API/_KEY nodig voor de authenticatie van degene die toegang wil tot de data.
// Aangevraagd bij The Movie DB
const API_KEY = 'bd226217f9af0310bd858f221a2f0b12';

// Functie die de gegevens ophaalt, in onderstaande geval de gevens m.b.t. movie Genres.

// Moet ik deze aanpassen om de titles te verkrijgen? IK DENK VAN WEL...
// Onderstaande geeft array met Genre en Genre id
// Dus ik moet (denk ik) een fetch maken om de juiste gegevens te verkrijgen. Is dat door
// simpelweg onderstaand URL aan te passen. Zo, ja...waar kan ik dan de juiste url zien / ophalen.
// misschien va Postman?? Geprobeerd, maar niet gelukt.

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const result = await fetch(apiUrl, {
    method: 'GET'
  })
    .then(response => response.json())
    .catch(error => console.log(error));

  return await result;
}
