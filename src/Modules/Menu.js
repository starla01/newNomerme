import React, { Component } from 'react';
import classes from './stylesHome/Menu.css';

class Menu extends Component {
	getLinks(){
		var data = this.props.data.data;
		const links = data.map(function(val, key){
			return <a href={val.url} key={key} className={classes.option}>
					<span>{val.name}</span>
				</a>
		})
		return links;
	}
	render(){
		return(
			<div className={classes.ContainerMenu} id={this.props.data.title} >
				<div id="logo" className={classes.logo}>
					<img src={this.props.data.logo} />
				</div>
				<p>holAMUNDO</p>
				<div id="links" className={classes.links}>
					{this.getLinks()}
				</div>
			</div>
		)
	}
}
export default Menu;