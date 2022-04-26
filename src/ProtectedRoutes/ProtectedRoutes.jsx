import React from "react";

function ProtectedRoute(props) {
	return (
		<div className="main-wrapper">
			<div className="main-container">{props.children}</div>
		</div>
	);
}

export default ProtectedRoute;
