import styles from './Info.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
} from '../../selectors';

export const InfoLayout = () => {
	const currentPlayer = useSelector(currentPlayerSelector);
	const isGameEnded = useSelector(isGameEndedSelector);
	const isDraw = useSelector(isDrawSelector);

	return (
		<h1 className={styles.info}>
			{!isGameEnded && !isDraw && 'Ходит ' + currentPlayer}
			{isGameEnded && 'Выиграл ' + currentPlayer + '!!!'}
			{isDraw && 'Ничья!!!'}
		</h1>
	);
};

InfoLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
