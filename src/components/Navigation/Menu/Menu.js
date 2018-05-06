import React from 'react';
import classes from './Menu.css';
//import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
//import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const menu = (props) => (
	<header className={classes.Menu}>
		{/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
		<div className={classes.Logo}>
			"Logo"
		</div>
		
		<nav className={classes.DesktopOnly}>
			Items
		</nav>
	</header>
);

export default menu