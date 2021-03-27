import React from "react";

export const Button = () => {
	return (
		<div>
			<h1>Button</h1>
			<p>
				Buttons are also called as call to action. We have range of buttons and
				their states. You may use a tag or button element, you need to add
				respective classes, and you are good to go.
			</p>
			<hr />

			<h4>Contained Buttons</h4>
			<p>
				Contained buttons are high-emphasis, distinguished by their use of
				elevation and fill. They contain actions that are primary to your app.
			</p>
			<div className="flex">
				<button className="btn btn-solid-default">Default</button>
				<button className="btn btn-solid-primary">Primary</button>
				<button className="btn btn-solid-secondary">Secondary</button>
				<button className="btn btn-solid-warning">Success</button>
				<button className="btn btn-solid-success">Error</button>
			</div>
			<hr />
			<h4>Outlined Button </h4>
			<p>
				In need of a button, but not the hefty background colors they bring?
				Replace '.btn-solid' with '.btn-outline'.
			</p>
			<div className="flex">
				<button className="btn btn-outline-primary">Primary</button>
				<button className="btn btn-outline-secondary">Secondary</button>
				<button className="btn btn-outline-success">Success</button>
				<button className="btn btn-outline-error">Error</button>
				<button className="btn btn-outline-warning">Warning</button>
			</div>
			<hr />
			<h4> Link Button</h4>
			<p>Want to attach a link action, at a button tap? Use Link Button</p>
			<button className="link-text link-text-primary ">Link</button>
			<hr />
			<h4>Icon Button</h4>
			<p>
				Icon Buttons can be created, by using a SVG as a child to parent button.
				Use the 'btn' class followed by 'btn-icon'.
			</p>
			<button className="btn">
				<span class="btn-icon">
					<i class="fas fa-shopping-cart"></i>
				</span>
			</button>
			<button className="btn btn-solid-primary">
				<span class="btn-icon">
					<i class="fas fa-shopping-cart"></i>
				</span>
				Add to Cart
			</button>
		</div>
	);
};
