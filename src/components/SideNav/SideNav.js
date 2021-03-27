import React from "react";
export const SideNav = ({ setRoute }) => {
	return (
		<div className="sidebar-container">
			<div className="navbar-links">
				<ul>
					<li onClick={() => setRoute("Alert")}>Alert</li>
					<li onClick={() => setRoute("Avatar")}>Avatar</li>
					<li onClick={() => setRoute("Badge")}>Badge</li>
					<li onClick={() => setRoute("Button")}>Button</li>
					<li onClick={() => setRoute("Card")}>Card</li>
					<li onClick={() => setRoute("Form")}>Form</li>
					<li onClick={() => setRoute("Image")}>Image</li>

					<li onClick={() => setRoute("List")}>List</li>

					<li onClick={() => setRoute("NavBar")}>NavBar</li>
					<li onClick={() => setRoute("Rating")}>Rating</li>
					<li onClick={() => setRoute("Typography")}>Typography</li>
					<li onClick={() => setRoute("Toast")}>Toast</li>
				</ul>
			</div>
		</div>
	);
};
