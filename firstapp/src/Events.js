import React from 'react'
class Events extends React.Component{
	state={
		username:""
		
	}
	handleClick=()=>{
		console.log(this.state.username)
		this.setState({
			username:""
		})
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		
		return(
			<div>
				<input 
				name="username"
				value={this.state.username}
				type="text" 
				placeholder="username" onChange={this.handleChange}/>
				<button onClick={this.handleClick}>submit</button>
			</div>
			)
	}
}
export default Events