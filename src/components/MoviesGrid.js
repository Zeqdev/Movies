import { useState, useEffect } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import { Loader } from './Loader';
import styles from './MoviesGrid.module.css';

export function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const query = useQuery();
	const search = query.get('search');

	useEffect(() => {
		setLoading(true);

		const searchURL = search ? '/search/movie?query=' + search : '/discover/movie';
		get(searchURL).then(response => {
			setMovies(response.results);
			setLoading(false);
		});
	}, [search]);

	if (loading) {
		return <Loader />;
	}

	return (
		<ul className={styles.moviesGrid}>
			{movies.map(item => (
				<MovieCard key={item.id} movie={item} />
			))}
		</ul>
	);
}
