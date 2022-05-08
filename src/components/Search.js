import { useEffect, useState } from 'react';
import { useQuery } from '../hooks/useQuery';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.css';

export function Search() {
	const [input, setInput] = useState('');
	const query = useQuery();
	const search = query.get('search');
	const navigate = useNavigate();

	useEffect(() => {
		setInput(search || '');
	}, [search]);

	const handleSubmit = e => {
		e.preventDefault();

		let path = '/?search=';
		navigate(path + input);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.searchContainer}>
				<input
					className={styles.searchInput}
					type='text'
					placeholder='Title'
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
				<button className={styles.searchButton} type='submit'>
					<FaSearch size={20} color='black' />
				</button>
			</div>
		</form>
	);
}
