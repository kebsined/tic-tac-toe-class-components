export const initialState = {
	currentPlayer: String.fromCharCode(10008),
	isGameEnded: false,
	isDraw: false,
	fields: Array(9).fill(''),
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: action.payload,
			};

		case 'SET_FIELDS':
			return { ...state, fields: action.payload };

		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: action.payload };

		case 'SET_IS_DRAW':
			return { ...state, isDraw: action.payload };

		case 'RESTART':
			return initialState;

		default:
			return state;
	}
};
