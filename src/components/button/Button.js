import { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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

class ButtonLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: props.fields,
			isGameEnded: props.isGameEnded,
			currentPlayer: props.currentPlayer,
			isDraw: props.isDraw,
		};
		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
		this.setIsDraw = this.setIsDraw.bind(this);
		this.currentPlayerTurn = this.currentPlayerTurn.bind(this);
		this.i = this.props.i;
		this.item = this.props.item;
	}
	setCurrentPlayer() {
		return this.props.currentPlayer === String.fromCharCode(10008)
			? String.fromCharCode(10683)
			: String.fromCharCode(10008);
	}
	setIsDraw() {
		return !this.props.fields.includes('');
	}
	currentPlayerTurn() {
		if (
			this.props.isGameEnded ||
			this.props.isDraw ||
			this.props.fields[this.i] !== ''
		) {
			return;
		}
		const playerFields = this.props.fields.slice();
		playerFields[this.props.i] = this.props.currentPlayer;

		this.props.dispatch({ type: 'SET_FIELDS', payload: playerFields });

		this.props.dispatch({
			type: 'SET_IS_GAME_ENDED',
			payload: checkWinner(playerFields, this.props.currentPlayer),
		});

		if (!playerFields.some(item => item === '')) {
			this.props.dispatch({ type: 'SET_IS_DRAW', payload: true });
			return;
		}

		if (!checkWinner(playerFields, this.props.currentPlayer)) {
			this.props.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: this.setCurrentPlayer(this.props.currentPlayer),
			});
		}
	}

	render() {
		return (
			<button
				className='w-28 h-28 border-none text-white text-6xl italic drop-shadow-[1px_10px_10px_rgb(255,204,0)] bg-transparent rounded-2xl shadow-white shadow-lg hover:bg-indigo-400 active:scale-90'
				onClick={() => this.currentPlayerTurn(this.i)}
				disabled={this.props.item}
			>
				{this.props.item}
			</button>
		);
	}
}

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer,
	fields: state.fields,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
});

export const Button = connect(mapStateToProps)(ButtonLayout);

Button.propTypes = {
	item: PropTypes.string,
	currentPlayerTurn: PropTypes.func,
	index: PropTypes.number,
};
