import React, { Component } from 'react';
import Aux from '../Aux/Aux';
//import classes from './Layout.css';
import axios from 'axios';

//Modules
import Menu from '../../Modules/Menu';
import Banner from '../../Modules/Banner';
import ComunicationSpace from '../../Modules/ComunicationSpace';
import WhoWeAre from '../../Modules/WhoWeAre';
import OurWorks from '../../Modules/OurWorks';
import Services from '../../Modules/Services'
import OurBlog from '../../Modules/OurBlog';
import GetInTouch from '../../Modules/GetInTouch';


class Layout extends Component {

	state = {
		dataModules: null
	}
	componentDidMount(){
		const _this = this;
		  axios.get('/assets/config/home.js')
			.then(function(response) {
				_this.setState({dataModules: response.data})
			});			
	}

	generateModule(module, key){
		let mods = '';
		if(this.state.dataModules !== null){
			switch(module) {
				case 'Menu':
					mods = <Menu key={key} data={this.state.dataModules[module]} />
					break;
				case 'Banner':
					mods = <Banner key={key} data={this.state.dataModules[module]} />
					break;
				case 'ComunicationSpace':
					mods =  <ComunicationSpace  key={key} data={this.state.dataModules[module]} />
					break;
				case 'WhoWeAre':
					mods =  <WhoWeAre key={key} data={this.state.dataModules[module]} />
					break;
				case 'OurWorks':
					mods =  <OurWorks key={key} data={this.state.dataModules[module]} />
					break;
				case 'Services':
					mods =  <Services key={key} data={this.state.dataModules[module]} />
					break;
				case 'OurBlog':
					mods =  <OurBlog key={key} data={this.state.dataModules[module]} />
					break;
				case 'GetInTouch':
					mods =  <GetInTouch key={key} data={this.state.dataModules[module]} />
					break;
				default: 
					mods =  <GetInTouch key={key} data={this.state.dataModules[module]} />
				break;
			}
			return mods;
		}
	}

	buildModules(){
		const _this = this;
		const modules = ["Menu", "Banner", "ComunicationSpace", "GetInTouch", "OurBlog", "OurWorks", "Services", "WhoWeAre"];
		const DOMModules = modules.map(function(x, key){

			 return _this.generateModule(x, key)
		})

		return DOMModules;
	}

	render(){
		this.state.dataModules !== null ? this.buildModules() : null;
		return (
			<Aux>
				{this.buildModules()}
			</Aux>
		)
	}
}

export default Layout;