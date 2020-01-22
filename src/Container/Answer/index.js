import * as React from 'react';
import Solutions from '../Solutions';

class Answer extends React.Component {
	constructor(props) {
		super(props);

		this.viewOtherPages = this.viewOtherPages.bind(this);
		this.state = { value: 0 };
	}

	viewOtherPages(page_string) {
		if (page_string === 'reverseStr') {
			this.setState({ value: 1 });
		}
	}

	render() {
		const { value } = this.state;

		return (
			<div>
				{value === 0 ?
					<div>
						<h1>Click below to proceed</h1>
						<div className="view-page" onClick={() => this.viewOtherPages('reverseStr')}>Solutions</div>
					</div>
					: ''
				}
				{value === 1 ? <Solutions /> : ''}
			</div>
		);
	}
}

export default Answer;