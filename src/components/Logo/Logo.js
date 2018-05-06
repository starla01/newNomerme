import React from 'react';
import burguerLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => {
	return (
		<div className={classes.Logo} style={{ height: props.height}}>
			<img src={burguerLogo} alt="MyBurger"/>
		</div>
	)
	
}

export default logo;