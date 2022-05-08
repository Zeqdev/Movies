import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';

export function MoviesGrid() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		get('/discover/movie').then(data => {
			setMovies(data.results);
		});
	}, []);

	return (
		<ul className={styles.moviesGrid}>
			{movies.map(item => (
				<MovieCard key={item.id} movie={item} />
			))}
		</ul>
	);
}
