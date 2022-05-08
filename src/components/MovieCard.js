import { Link } from 'react-router-dom';
import { getMovieIMG } from '../utils/getMovieIMG';
import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {
	const imgURL = getMovieIMG(300, movie.poster_path);

	return (
		<li className={styles.movieCard}>
			<Link to={'/movie/' + movie.id}>
				<img
					className={styles.movieImg}
					height={345}
					width={230}
					src={imgURL}
					alt={movie.title}></img>
				<div>{movie.title}</div>
			</Link>
		</li>
	);
}
