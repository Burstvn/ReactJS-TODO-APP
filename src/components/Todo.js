import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Popup from './Popup';
import './Todo.css';
class Todo extends Component {
	constructor() {
		super();
		this.state = {
			item: [
				{id: 0, todo: 'Viet Hoang'},
				{id: 1, todo: 'Quang Dat'},
				{id: 2, todo: 'Dong Truong'}
			],
			input: '',
			show: false,
			inputPopup: '',
		};
		
		// object 	
		this.deleteItem = this.deleteItem.bind(this);
		this.inputHandle = this.inputHandle.bind(this);
		this.addItem = this.addItem.bind(this);
		// context in class - arrow function
	}
	
	setItem = (value) =>{
		this.setState(state=>{
			return{
				item: state.item = value
			}});
	}

	setInput = (value) =>{
		this.setState(state=>{
			return{
				input: state.input = value
			}
		})
	}

	deleteItem(item){
		const newArray = [...this.state.item];
		const index = newArray.findIndex(x => x === item);
		newArray.splice(index,1);
		this.setItem(newArray)
	}

	inputHandle(e){

		// object merging 
		this.setState({[e.target.name]: e.target.value});
	}

	addItem(e){
		e.preventDefault();
		const newArray = this.state.item;
		const id = newArray.length + 1;
		newArray.push({id: id, todo: this.state.input});
		this.setInput('');
		document.querySelector('.form-input').value='';
	}

	showPopup = (item) => {
		// render todo value / tạo 1 item state mới từ item
		this.setState({show: true, tempId: item.id, inputPopup: item.todo});
		
	}

	PopupSubmit = (e) => {
		e.preventDefault();
		const value = document.querySelector('.input-popup').value;
		// close Popup
		this.setState({show: false});
		//tìm kiếm index đối tượng cần update
		const newArray = this.state.item;
		const index = newArray.findIndex(item =>
				item.id === this.state.tempId
			);
		console.log(index)
		
		newArray[index] = {id: this.state.tempId, todo: value};
		this.setItem(newArray);
		document.querySelector('.input-popup').value = '';
	}

	render() {
		return (
			<div className='todo'>
				<div className="alert alert-primary" role="alert">
				  <h4 className="alert-heading">Todo List</h4>
				</div>
				<TodoForm inputChanger={this.inputHandle} submit={this.addItem}/>
				<TodoList data={this.state.item} showPopup={this.showPopup} del={this.deleteItem}/>
				<Popup show={this.state.show} inputPopup={this.state.inputPopup} submit={this.PopupSubmit} />
			</div>
		);
	}
}

export default Todo;
