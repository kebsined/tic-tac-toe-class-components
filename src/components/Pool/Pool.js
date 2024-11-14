import styles from './Pool.module.css';
import { Button } from '../button/Button';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { fieldsSelector } from '../../selectors';

export const PoolLayout = () => {
	const fields = useSelector(fieldsSelector);

	return (
		<div className={styles.pool}>
			{fields.map((item, i) => (
				<Button key={i} item={item} i={i} />
			))}
		</div>
	);
};

PoolLayout.propTypes = {
	fields: PropTypes.array,
	playerClick: PropTypes.func,
	currentPlayer: PropTypes.string,
};
