import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { get } from '../utils/httpClient';
import { Loader } from '../components/Loader';
import { getMovieIMG } from '../utils/getMovieIMG';
import styles from './MovieDetails.module.css';

export function MovieDetails() {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		get('/movie/' + movieId).then(result => {
			setMovie(result);
			setLoading(false);
		});
	}, [movieId]);

	if (loading) {
		return <Loader />;
	}

	if (!movie) {
		return null;
	}

	const imgURL = getMovieIMG(500, movie.poster_path);

	return (
		<div className={styles.detailsContainer}>
			<img className={styles.movieImg} src={imgURL} alt={movie.title} />
			<div className={styles.movieDetails}>
				<p className={styles.movieInfo}>
					<strong>Title: </strong>
					{movie.title}
				</p>
				<p className={styles.movieInfo}>
					<strong>Genres: </strong>
					{movie.genres.map(genre => genre.name).join(', ')}
				</p>
				<p className={styles.movieInfo}>
					<strong>Description: </strong>
					{movie.overview}
				</p>
			</div>
		</div>
	);
}
