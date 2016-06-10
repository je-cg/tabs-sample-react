import React from 'react';
import Tabs from './components/Tabs.jsx';
import Content from './components/Content.jsx';

let Data = [
{ name: 'Tab 1', isSelected: true, id: 1},
{ name: 'Tab 2', isSelected: false, id: 2 },
{ name: 'Tab 3', isSelected: false, id: 3 }
];

class App extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			Selected: Data[0]
		};
	}
	handleClick(tab) {
		console.log("from handleClick", tab);
		this.setState({Selected: tab});
		console.log("context",this);
	} 
	render() {
		console.log("from render", this.state);
		return (
			<div>
			<Tabs tabs={Data} selectedTab={this.state.Selected} changeTab={this.handleClick.bind(this)} />
			<Content active={this.state.Selected} />
			</div>
			);
	}
}


export default App;