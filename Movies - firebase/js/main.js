import MovieDatabase from "./moviedatabase.js";

let _movieDatabase = new MovieDatabase();

_movieDatabase.read();

window.createMovie = () => {
  let titleInput = document.querySelector('#title');
  let yearInput = document.querySelector('#year');
  let directorInput = document.querySelector('#director');
  let lengthInput = document.querySelector('#length');
  let imgInput = document.querySelector('#img');
  let statusInput = document.querySelector('#status');

  _movieDatabase.create(titleInput.value, yearInput.value, directorInput.value, lengthInput.value, imgInput.value, statusInput.checked);
}

window.deleteMovie = (id) => {
  _movieDatabase.deleteMovie(id);
}

window.showDetailView = (id, title, director, img) => {
  
  let movieid = id;
  let movietitle = title;
  let moviedirector = director;
  let movieimg = img;
  _movieDatabase.showDetailView(movieid, movietitle, moviedirector, movieimg);
}
