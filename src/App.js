import { Component } from 'react';
import { Pool } from './components/Pool/Pool';
import { Info } from './components/Info/Info';

import { connect } from 'react-redux';

class ClassApp extends Component {
	constructor(props) {
		super(props);
		this.beginClick = this.beginClick.bind(this);
	}
	beginClick() {
		this.props.dispatch({ type: 'RESTART', payload: Array(9).fill('') });
	}

	render() {
		return (
			<div className='absolute flex flex-col gap-5 items-center -translate-y-1/2 left-1/2 top-1/2 -translate-x-1/2 '>
				<Info />
				<Pool />
				<button
					className='mt-5  w-64 bg-transparent text-2xl leading-relaxed text-white font-bold uppercase tracking-wide  font-sans  italic drop-shadow-[1px_10px_10px_rgb(255,204,0)] rounded-xl border-t-0 shadow-white shadow-lg hover:scale-110 active:scale-100'
					onClick={this.beginClick}
				>
					НАЧАТЬ СНАЧАЛА
				</button>
			</div>
		);
	}
}

export const App = connect()(ClassApp);
