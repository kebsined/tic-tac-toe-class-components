import styles from './Button.module.css';
import PropTypes from 'prop-types';

import {
	isGameEndedSelector,
	currentPlayerSelector,
	isDrawSelector,
	fieldsSelector,
} from '../../selectors';
import { useDispatch, useSelector } from 'react-redux';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const checkWinner = (fields, currentPlayer) => {
	return WIN_PATTERNS.some(pattern =>
		pattern.every(index => fields[index] === currentPlayer)
	);
};

export const Button = ({ i, item }) => {
	const dispatch = useDispatch();

	const fields = useSelector(fieldsSelector);
	const currentPlayer = useSelector(currentPlayerSelector);
	const isDraw = useSelector(isDrawSelector);
	const isGameEnded = useSelector(isGameEndedSelector);

	const setCurrentPlayer = () => {
		return currentPlayer === String.fromCharCode(10008)
			? String.fromCharCode(10683)
			: String.fromCharCode(10008);
	};

	const setIsDraw = fields => {
		return !fields.includes('');
	};

	const currentPlayerTurn = i => {
		if (isGameEnded || isDraw || fields[i] !== '') {
			return;
		}
		const playerFields = fields.slice();
		playerFields[i] = currentPlayer;

		dispatch({ type: 'SET_FIELDS', payload: playerFields });

		dispatch({
			type: 'SET_IS_GAME_ENDED',
			payload: checkWinner(playerFields, currentPlayer),
		});
		if (!checkWinner(playerFields, currentPlayer)) {
			dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: setCurrentPlayer(currentPlayer),
			});
			dispatch({
				type: 'SET_IS_DRAW',
				payload: setIsDraw(playerFields),
			});
		}
	};
	return (
		<button
			className={styles.button}
			onClick={() => currentPlayerTurn(i)}
			disabled={item}
		>
			{item}
		</button>
	);
};

Button.propTypes = {
	item: PropTypes.string,
	currentPlayerTurn: PropTypes.func,
	index: PropTypes.number,
};
