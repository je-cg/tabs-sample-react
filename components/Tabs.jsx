import React from 'react';
import Tab from './Tab.jsx';

class Tabs extends React.Component {

	render() {

		return (
			<ul className="nav nav-tabs">
			{this.props.tabs.map(function(tab){
				return (
					// <Tab data={tab} isActive={this.props.selectedTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
					<Tab data={tab} isActive={this.props.selectedTab === tab} handleClick={this.props.changeTab} />
					);
			}.bind(this))}      
			</ul>
			);
	}
}


export default Tabs;
