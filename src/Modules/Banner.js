import React, { Component } from 'react';
import classes  from './stylesHome/Banner.css';

class Banner extends Component {
	// shouldComponentUpdate(nextProps, nextState){
	// 	return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	// }
	render(){
		return(
				<div id={this.props.data.module} className={this.props.data.module}>
					<div className={classes.Banner}>
						<img src={this.props.data.images} className={classes.Image}/>
					</div>
				</div>
		)
	}
}
export default Banner;