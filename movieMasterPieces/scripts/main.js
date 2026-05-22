import { generateMoviesHTML } from "./movie-converter.js";
import { renderMoviesToDOM } from "./movie-renderer.js";

const movieHTML = generateMoviesHTML();
renderMoviesToDOM(movieHTML);