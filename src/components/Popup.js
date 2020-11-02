import React, { Component } from 'react';
import './Popup.css';
export default class Popup extends Component {
    render() {
        return (
            <div className={this.props.show ? 'popup show' : 'popup disabled'}>
                <h2>Edit Todo</h2>
                    <form className='form-popup'>
                        <input 
                            name='input-popup' 
                            type='text' 
                            className='input-popup'
                        />
                        <button 
                            className='submit-popup btn btn-primary' 
                            onClick={this.props.submit} 
                            >Submit
                        </button>
                        <i className="fa fa-times-circle" aria-hidden="true" onClick={this.props.hidePopup}></i>
                    </form>                
            </div>
        )
    }
}
