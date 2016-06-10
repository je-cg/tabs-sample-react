import React from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';

var tabData = [
{ name: 'Tab 1', isActive: true, id: 1},
{ name: 'Tab 2', isActive: false, id: 2 },
{ name: 'Tab 3', isActive: false, id: 3 }
];

class App extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			Selected: tabData[0]
		};
	} 
	render() {

		return (
			<Tabs tabs=tabData />
			<Content active={this.state.Selected} />
			);
	}
}


export default App;