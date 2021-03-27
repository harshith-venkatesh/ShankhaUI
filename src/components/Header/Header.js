import React from "react";

export const Header = ({ setRoute }) => {
	return (
		<nav className="header-container">
			<div className="header-logo " onClick={() => setRoute("home")}>
				<img
					className="header-image"
					src="https://mythologyandvaishbhat.files.wordpress.com/2020/07/shankh.png?w=500"
					alt="Shankha"
				/>
				<div className="header-title">
					<span className="header-title-name">Shankha CSS</span>
					<span className="version-title">v1.0</span>
				</div>
			</div>
			<div>
				<div>
					<ul className="list-no-bullet">
						<li onClick={() => setRoute("Avatar")}>Docs</li>
					</ul>
				</div>
				<button
					className="toggle-button"
					onClick={() => {
						document
							.getElementsByClassName("navbar-links")[0]
							.classList.toggle("active");
					}}
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
		</nav>
	);
};
