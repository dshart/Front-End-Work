import {movies} from "./movies-data.js";

export const generateMoviesHTML = () => {
    let moviesHTML = '';

    for (const movie of movies) {
        moviesHTML += `<article class="movie">
          <img src="${movie.poster}" alt="${movie.title} poster" class="movie-poster">
          <div class="movie-details">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-description">${movie.description}</p>
          </div> 
         </article>
    `;     
    }
    return moviesHTML;
};