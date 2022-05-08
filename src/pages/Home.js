import { useQuery } from '../hooks/useQuery';
import { Search } from '../components/Search';
import { MoviesGrid } from '../components/MoviesGrid';

export function Home() {
	const query = useQuery();
	const search = query.get('search');

	return (
		<div>
			<Search />
			<MoviesGrid key={search} search={search} />
		</div>
	);
}
