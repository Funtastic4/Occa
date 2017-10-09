import React from 'react';
import Entry from './Entry.jsx';
import { Button } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';

const Sidebar = (props) => {
	const classes = props.display ? 'sidebar show' : 'sidebar';
	return (
		<div id="sidebar" className={classes}>
			<Button secondary onClick={() => props.hideEvents()}>Hide Events</Button>
			<Item.Group divided relaxed/>
				{props.events.map((event, key) =>
					<Entry event={event} key={key} />
				)}
			<Item.Group/>
	  </div>
	)
}

export default Sidebar;
