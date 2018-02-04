import React, {Component} from 'react';
import Messages from './HouseComps/Messages.js';
import Chores from './HouseComps/Chores.js';
import Bills from './HouseComps/Bills.js';
import Shopping from './HouseComps/Shopping.js';


class HouseBoard extends Component {
	constructor(props){
		super(props);
		this.state = {
			bannerState: ''
		}
	}

componentDidMount(){
	if (this.props.dashboard === "profile"){
		console.log("PROFILE PROFILE PROFIIIILE");
		this.setState({
			bannerState: this.props.user.name
		});
	} else if (this.props.dashboard === "househub"){
		console.log("HOUSE HOUSE HOUSE");
		this.setState({
				bannerState: this.props.house.name
			});
		}
}
	render(){
		return(
			<div className="houseboard">
				<h1 className ="house-banner"> {this.state.bannerState}'s Hub </h1>
				<div className="widget-container">
					<Messages house={this.props.house} refreshList={this.props.refreshList} dashboard={this.props.dashboard} />
					<Chores user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
					<Bills house={this.props.house} refreshList={this.props.refreshList} dashboard={this.props.dashboard} />
					<Shopping user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
				</div>
			</div>
		);
	}
}

export default HouseBoard;