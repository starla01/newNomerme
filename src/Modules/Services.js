import React, { Component } from 'react';

class Services extends Component {
	// shouldComponentUpdate(nextProps, nextState){
	// 	return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	// }
	render(){
		return(
			<div id={this.props.data.title} className={this.props.data.module}>
					Services
			</div>
		)
	}
}
export default Services;