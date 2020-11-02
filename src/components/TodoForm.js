import React, { Component } from 'react';
import './TodoForm.css';
class Todoform extends Component {
	render() {
		return (
			<form className='todo-form' onSubmit={this.props.submit}>
				<input 
				className='form-input' 
				name="input" 
				placeholder="Input todo..." 
				onChange={this.props.inputChanger}
				/>
				<button>Thêm</button>
			</form>
		);
	}
}
export default Todoform;
