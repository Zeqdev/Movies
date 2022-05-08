import { Search } from '../components/Search';
import { MoviesGrid } from '../components/MoviesGrid';

export function Home() {
	return (
		<div>
			<Search />
			<MoviesGrid />
		</div>
	);
}
