import {firebaseDB} from "./firebase-service.js";

export default class MovieDatabase {
  construtor(){
    this.read();
    this.movieRef();
    this.movies();
    this.selectedMovies();
  }

  read() {
    this.movieRef = firebaseDB.collection("movies");
    this.movieRef.onSnapshot(snapshotData => {
    let movies = [];
    snapshotData.forEach(doc => {
      let movie = doc.data();
      movie.id = doc.id;
      console.log(movie)
      movies.push(movie);
    });
    this.appendUsers(movies);
  });
  }

  appendUsers(movies) {
    let htmlTemplate = "";
    for (let movie of movies) {
      htmlTemplate +=`
 
        <a href="#detail-view" onclick="showDetailView('${movie.id}','${movie.title}','${movie.director}','${movie.img}')" >
          <div class="exstra_movie_info">
            <div class="length">
            <i class="far fa-calendar-times"></i>
            <p>${movie.year}</p>
            </div>
            <div class="length">
            <i class="far fa-clock"></i>
            <p>${movie.length}</p>
            </div>
          </div>
          <div id="delete-movie" class="hide"><i class="fas fa-times" onclick="deleteMovie('${movie.id}')"></i></div>
          <img src="${movie.img}"></img>
          <div class="movie_info">
          <h3>${movie.title}</h3>
          <p>${movie.director}</p>
          </div>
          <div class="false ${movie.status}"></div>
          <div class="overlay"></div>
        </a>
      `;
    }
    document.querySelector('#movies_container').innerHTML = htmlTemplate;
  }

    showDetailView(id, title, director, img){
      document.querySelector("#detail-view").innerHTML = "";
      let movietitle = title;
      let moviedirector = director;
      let movieimg = img;

      console.log(id, title, director, img); 

      document.querySelector("#detail-view").innerHTML += `
      <article class="detail-view">
      <div class="movie-detail">
        <div class="movie-img"><img src="${movieimg}"></div>
        <div class="movie-text">
          <h3>${movietitle}</h3>
          <p>${moviedirector}<p>
        </div>
      <div>
      </article>
      `; 
  }

  create(title, year, director, length, img, status) {
  this.movieRef.add({
    title,
    year,
    director,
    length,
    img,
    status
  });
  this.clear();
  }

  clear() {
  // reset input fields
  document.querySelector('#title').value = "";
  document.querySelector('#year').value = "";
  document.querySelector('#director').value = "";
  document.querySelector('#length').value = "";
  document.querySelector('#img').value = "";
}

  deleteMovie(id) {
    this.movieRef.doc(id).delete();
  }
}
