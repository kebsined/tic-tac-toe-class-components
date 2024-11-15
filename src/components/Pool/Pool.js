import { Button } from '../button/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';

class PoolLayout extends Component {
	render() {
		return (
			<div className='grid grid-cols-3 w-86 h-86 gap-1 items-center'>
				{this.props.fields.map((item, i) => (
					<Button key={i} item={item} i={i} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({ fields: state.fields });
export const Pool = connect(mapStateToProps)(PoolLayout);

Pool.propTypes = {
	fields: PropTypes.array,
};
