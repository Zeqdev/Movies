import placeholder from '../assets/placeholder.jpeg';

export function getMovieIMG(width, path) {
	return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
