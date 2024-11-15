import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';

class InfoLayout extends Component {
	render() {
		return (
			<h1 className='w-80 text-center  text-white text-3xl font-bold uppercase tracking-wide  font-sans leading-tight italic drop-shadow-[1px_10px_10px_rgb(255,204,0)] mb-4'>
				{!this.props.isGameEnded &&
					!this.props.isDraw &&
					'Ходит ' + this.props.currentPlayer}
				{this.props.isGameEnded &&
					'Выиграл ' + this.props.currentPlayer + '!!!'}
				{this.props.isDraw === true && 'Ничья!!!'}
			</h1>
		);
	}
}

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const Info = connect(mapStateToProps)(InfoLayout);
Info.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
