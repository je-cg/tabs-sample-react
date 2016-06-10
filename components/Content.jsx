import React from 'react';

class Content extends React.Component {
	render(){
		let content= (function(n){
			// console.log("from content",n);
			if(n===1){
				return <p className="panel-body">Content of tab 1 blah blah blah</p>
			}
			else if(n===2) {
				return <p className="panel-body">Content of tab 2 how is this different</p>
			}
			else if(n===3){
				return <div>
				<p className="panel-body">Content of tab 3</p>
				<p className="panel-body">what short paragraphs</p>
				</div>
			}
		})(this.props.active.id)
		return(
			<div>
				<section className="panel">
				{content}
				</section>
			</div>
			);
	}
}


export default Content;