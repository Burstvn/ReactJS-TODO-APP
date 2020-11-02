import React, { Component } from 'react';
import './TodoList.css';
class TodoList extends Component {
	render() {
		return this.props.data.map((item,index)=>
					{return(
						<div className='item' key={index}>
							<div type='text' className='content'>{item.todo}</div>
							<div className='edit'>
								<i 
									className='fa fa-pencil btn-edit' 
									onClick={()=> this.props.showPopup(item)}
								/>
								<i 
									className='fa fa-times-circle btn-edit' 
									onClick={()=>this.props.del(item)}
								/>
							</div>
						</div>
					)}
				)
	}
}
export default TodoList;
