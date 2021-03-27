import React from "react";

export const List = () => {
	return (
		<div className="container">
			<h1>Lists</h1>
			<p>
				Lists can be used at so many places, navigation bar, stacked
				notifications, article pages, etc. The different types of lists are
				listed below
			</p>
			<hr />
			<h4>List with no bullets</h4>
			<div class="list-title">Categories</div>
			<ul class="list-no-bullet">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>List with bullets</h4>
			<div class="list-title">Categories</div>
			<ul class="list-bullet">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Unordered List</h4>
			<div class="list-title">Categories</div>
			<ul class="list-unorder">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Ordered List</h4>
			<div class="list-title">Categories</div>
			<ul class="list-order">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Inline List</h4>
			<div class="list-title">Categories</div>
			<ul class="list-inline">
				<li class="list-inline">Home</li>
				<li class="list-inline">Smartphones</li>
				<li class="list-inline">Earphones</li>
				<li class="list-inline">Watches</li>
			</ul>
		</div>
	);
};
