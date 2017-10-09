import React from 'react';

const Legend = (props) => {
	const markers = Object.keys(props.markers);

	return (
		<div id="legend">
			<ul id="legendList">
				{markers.map((type, key) =>
					<li key={key}><img src={props.markers[type]} /> {type} </li>
				)}
			</ul>
		</div>
	);
}

export default Legend;
