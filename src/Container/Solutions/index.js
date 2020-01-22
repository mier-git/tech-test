import * as React from 'react';

class Solutions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			string_val: '',
			str_reverse: '',
			digit: '',
			fibo_data: [],
			array_of_digits: [],
			final_array: [],
			arr_digits: '',
			sorted_array: [],
			sum_digit: '',
			sum_digit_array: [],
			has_sum_of_8: '',
		};
		this.reverseString = this.reverseString.bind(this);
		this.changeString = this.changeString.bind(this);
		this.generateFiboSeries = this.generateFiboSeries.bind(this);
		this.addToArrayDigits = this.addToArrayDigits.bind(this);
		this.sortArray = this.sortArray.bind(this);
		this.addToSumDigit = this.addToSumDigit.bind(this);
		this.hasSumOfEight = this.hasSumOfEight.bind(this);
	}

	reverseString() {
		const { string_val } = this.state;

		let arrayOfWords = string_val.split(' ');
		let string_rev = '';

		for (let i = arrayOfWords.length - 1; i >= 0 ; i--) {
			string_rev += arrayOfWords[i] + ' ';
		}
		this.setState({ str_reverse: string_rev.trim(), string_val: '' });
	}

	changeString(e) {
		if (e.target.name === 'string_val') {
			this.setState({ string_val: e.target.value });
		} else if (e.target.name === 'digit') {
			this.setState({ digit: parseInt(e.target.value) });
		} else if (e.target.name === 'array_of_digits') {
			this.setState({ arr_digits: parseInt(e.target.value) });
		} else if (e.target.name === 'sum_digit') {
			this.setState({ sum_digit: parseInt(e.target.value) });
		}
	}

	generateFiboSeries() {
		let { digit } = this.state;
		let initiate_digit = 1;
		let fibo_array = [];
		let temp_sum = 0;
		let str_fibo = '';

		fibo_array.push(initiate_digit);

		for (let i = 0; i < digit - 1; i++) {
			temp_sum += initiate_digit;
			fibo_array.push(temp_sum);
			initiate_digit = fibo_array[i];
		}

		this.setState({ fibo_data: fibo_array, digit: '' });
	}

	addToArrayDigits(e) {
		e.preventDefault();
		const { arr_digits, array_of_digits } = this.state;

		if (arr_digits !== '') {
			array_of_digits.push(arr_digits);
			this.setState({ array_of_digits: array_of_digits, arr_digits: '' });
		}
	}

	sortArray() {
		const { array_of_digits } = this.state;
		array_of_digits.sort(function(a, b) {
			return a - b;
		});

		this.setState({ final_array: array_of_digits, array_of_digits: [] });
	}

	addToSumDigit(e) {
		e.preventDefault();
		const { sum_digit, sum_digit_array } = this.state;

		if (sum_digit !== '') {
			sum_digit_array.push(sum_digit);
			this.setState({ sum_digit_array: sum_digit_array, sum_digit: '' });
		}
	}

	hasSumOfEight() {
		let sum_of_8 = false;
		const { sum_digit, sum_digit_array } = this.state;

		for (let i = 0; i < sum_digit_array.length; i++) {
			for (let x = 0; x < sum_digit_array.length; x++) {
				if (i !== x) {
					let sum = sum_digit_array[i] + sum_digit_array[x];
					if (sum === 8) {
						sum_of_8 = true;
					}
				}
			}
		}

		if (sum_of_8) {
			this.setState({ has_sum_of_8: 'The array given has a sum of 8' });
		} else {
			this.setState({ has_sum_of_8: 'Array given does not have sum of 8' });
		}

		this.setState({ sum_digit_array: [] });
	}

	render() {
		const {
			string_val,
			str_reverse,
			digit,
			fibo_data,
			arr_digits,
			array_of_digits,
			sorted_array,
			sum_digit,
			sum_digit_array,
			has_sum_of_8,
			final_array,
		} = this.state;
		return (
			<div className="container">
				<div>
					<div className="header">REVERSE STRING</div>
					<span>Enter a string: </span><input name="string_val" onChange={this.changeString} className="input" type="text" value={string_val} />
					<button className="button" onClick={this.reverseString}>Reverse</button>
					<div className="sol-result">Reverse String: <span className="result">{str_reverse}</span></div>
				</div>

				<div className="class">
					<div className="header">FIBONACCI SERIES</div>
					<span>Enter a digit: </span><input name="digit" onChange={this.changeString} className="input" type="number" value={digit} />
					<button className="button" onClick={this.generateFiboSeries}>Get Fibonacci Series</button>
					<div className="sol-result">Fibonacci Series: <span className="result">{fibo_data.join(', ')}</span></div>
				</div>

				<div className="class">
					<div className="header">SORT ARRAY OF DIGITS</div>
					<span>Enter a digit: </span>
					<form onSubmit={this.addToArrayDigits}>
						<input name="array_of_digits" onChange={this.changeString} className="input" type="number" value={arr_digits} />
					</form>
					<button className="button" onClick={this.sortArray}>Sort Array of Digits</button>
					<div className="sol-result">Preview Array of Digits: 
						<span className="result">{array_of_digits.join(', ')} </span>
					</div>
					<div className="sol-result">Sorted Array: <span className="result">{final_array.join(', ')}</span></div>
				</div>

				<div className="class">
					<div className="header">SUM OF 8</div>
					<span>Enter a digit: </span>
					<form onSubmit={this.addToSumDigit}>
						<input name="sum_digit" onChange={this.changeString} className="input" type="number" value={sum_digit} />
					</form>
					<button className="button" onClick={this.hasSumOfEight}>Sum of 8</button>
					<div className="sol-result">Preview Array of Digits: 
						<span className="result">{sum_digit_array.join(', ')} </span>
					</div>
					<div className="sol-result">Has sum of 8: <span className="result">{has_sum_of_8}</span></div>
				</div>
			</div>
		);
	}
}

export default Solutions;