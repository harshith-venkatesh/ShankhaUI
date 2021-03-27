import React from "react";
import { Header } from "../Header/Header";

export const NavBar = ({ setRoute }) => {
	return (
		<div class="container">
			<h1>Navigation</h1>
			<p>
				Navigation bar is used to navigate through the web apps or websites.
				This navigation component is responsive. It is a hamburger menu in
				medium and small devices
			</p>
			<div style={{ display: "block" }}>
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
						<div className="navbar-links">
							<ul className="list-no-bullet">
								<li onClick={() => setRoute("Avatar")}>Docs</li>
								<li onClick={() => setRoute("Avatar")}>Examples</li>
								<li onClick={() => setRoute("Avatar")}>Releases</li>
							</ul>
						</div>
					</div>
				</nav>
				<hr />
				<p>The code for the bavbar is below</p>
				<div className="code-display">
					<pre>
						<code>
							{`
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
			<li >Docs</li>
			<li >Examples</li>
			<li >Releases</li>
		</ul>
	</div>
</div>
</nav>
				`}
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
};
