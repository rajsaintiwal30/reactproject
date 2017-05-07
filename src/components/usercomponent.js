import React, { Component } from 'react';
import axios from 'axios';

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
	this.setState({uname:e.target.value});
}
handleGenderChange(e) {
	this.setState({gender:e.target.value});
}
handleFnameChange(e) {
	this.setState({fname:e.target.value});
}
handlePassChange(e) {
	this.setState({pass:e.target.value});
}

	userInsert(e){
console.log(`${this.state.uname},${this.state.gender},${this.state.fname},${this.state.pass}`);
	
		axios.post('nodeapi/addUser',{uname:this.state.uname,gender:this.state.gender,fname:this.state.fname,pass:this.state.pass})
		.then(function (response){

			console.log('user inserted');
			console.log(response);
		});

	}


	render(){
		return(
		<form onSubmit={this.userInsert}>
			<div>				
				<label style={styles.labelapp}>Name : </label><input type="text" id="uname" className="uname" onChange={this.handleNameChange}/><br/>
				<label style={styles.labelapp}>Gender :</label><input type="text" id="gender" className="gender" onChange={this.handleGenderChange}/><br/>
				<label style={styles.labelapp}>Full Name :</label><input type="text" id="fname" className="fname" onChange={this.handleFnameChange}/><br/> 
				<label style={styles.labelapp}>password : </label><input type="password" id="pass" className="pass" onChange={this.handlePassChange}/><br/>
				<input type="submit" value="post" onClick={this.userInsert}/>
				
			</div>
		</form>
			)
	}
}