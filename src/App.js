import { PoolLayout } from './components/Pool/Pool';
import { InfoLayout } from './components/Info/Info';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';

export const App = () => {
	const dispatch = useDispatch();

	const beginClick = () => {
		dispatch({ type: 'RESTART', payload: Array(9).fill('') });
	};

	return (
		<div className={styles.game}>
			<InfoLayout />
			<PoolLayout />
			<button className={styles.beginButton} onClick={beginClick}>
				НАЧАТЬ СНАЧАЛА
			</button>
		</div>
	);
};
