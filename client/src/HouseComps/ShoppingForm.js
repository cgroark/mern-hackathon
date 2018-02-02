import React, {Component} from 'react';
import axios from 'axios';

class ShoppingForm extends Component {
	constructor(props){
		super(props)
		this.state= {
				newItem: '',
				date: '',
				roommateId: '',
				roommateName:'',
			}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	addName = (name) => {
		this.setState({roommateName: name});
	}

	addRoommate = (e) =>{
		let base = this;
		const roommateId = e.target.value;
		base.setState({roommateId: roommateId});
		base.props.roommates.forEach(function(rm){
			console.log("drop down name" + rm.name);
			if(rm.id === roommateId){
				base.addName(rm.name);
			}
		});
	}

	addItem = (e) => {
		e.preventDefault();
		axios.post('/lists/shopping/create', {
			item: this.state.newItem,
			roommateId: this.state.roommateId,
			date: this.state.date,
			house: this.props.house._id,
			roommateName: this.state.roommateName
		}).then(response => {
			this.props.refreshList();
		})
	}

	render(){
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.name}</option>
		});
		return(
			<div className="form-container">
				<form className="shopping-form" onSubmit={this.addItem}>
        			<input type="text" name="newItem" placeholder="Add an item" onChange={this.handleChange} value={this.state.newItem} required/>
        			<select required onChange={this.addRoommate}>
        				<option value="" disabled selected hidden>Assign a Roommate</option>
        				{roommateOptions}
        			</select>
        			<input type="date" name="date" onChange={this.addhandleChange} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.addItem}> Add to List </button>
			</div>
		)
	}
}


export default ShoppingForm