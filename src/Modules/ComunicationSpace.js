import React, { Component } from 'react';
import classes from './stylesHome/ComunicationSpace.css';

class ComunicationSpace extends Component {
	// shouldComponentUpdate(nextProps, nextState){
	// 	return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	// }
	render(){ 
		return(
			<div id={this.props.data.module} className={classes.ComunicationSpace}>
				<div id="data">
					<div >
						<p>There's huge space beetween creativity and imagination</p>
						<p>-- Fernando Robles  Rivera</p>
					</div>
					<div >
						<img />
					</div>
				</div>
			</div>
		)
	}
}
export default ComunicationSpace;