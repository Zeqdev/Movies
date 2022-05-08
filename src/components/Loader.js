import { CgSpinnerTwoAlt } from 'react-icons/cg';
import styles from './Loader.module.css';

export function Loader() {
	return (
		<div className={styles.loaderContainer}>
			<CgSpinnerTwoAlt size={60} className={styles.loader} />
		</div>
	);
}
