import React, { Component } from 'react';
var styles = {
	labelapp:{
		padding:"5px 5px 5px 5pxs"
	}
}



export default class UserComponent extends Component {

	constructor(props){
		super(props);

		this.state = {uname : '',gender:'',fname:'',pass:''};
		this.userInsert = this.userInsert.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleGenderChange = this.handleGenderChange.bind(this);
		this.handleFnameChange = this.handleFnameChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);

 
	}

handleNameChange(e) {
	this.setState({unmae:e.target.value});
}

	userInsert(e){


	}


	render(){
		return(
		<div>
			
			<label style={styles.labelapp}>Name : </label><input type="text" id="uname" className="uname"/><br/>
			<label style={styles.labelapp}>Gender :</label><input type="text" id="gender" className="gender"/><br/>
			<label style={styles.labelapp}>Full Name :</label><input type="text" id="fname" className="fname"/><br/> 
			<label style={styles.labelapp}>password : </label><input type="password" id="pass" className="pass"/><br/>
			<input type="submit" value="submit" onclick={this.userInsert}/>
			
		</div>
			)
	}
}