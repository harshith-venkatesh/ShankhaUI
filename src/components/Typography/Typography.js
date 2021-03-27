import React from "react";

export const Typography = () => {
	return (
		<div className="container">
			<h1>Typography</h1>
			<p>Check out below text utilities.</p>
			<p>
				Example of Heading text For heading u can use h1, h2, h3, h4, h5, h6
				elements. The same font-styling is present for class names
				<em> h1, h2, h3, h4, h5, h6 </em>class. You can add one of these classes
				to style the text.
			</p>
			<hr />
			<h1>H1-Heading</h1>
			<h2>H2-Heading</h2>
			<h3>H3-Heading</h3>
			<h4>H4-Heading</h4>
			<h5>H5-Heading</h5>
			<h6>H6-Heading</h6>
			<hr />
			<p>The code for the typography is below</p>
			<div className="code-display">
				<pre>
					<code>
						{`
	<h1>H1-Heading</h1>
	<h2>H2-Heading</h2>
	<h3>H3-Heading</h3>
	<h4>H4-Heading</h4>
	<h5>H5-Heading</h5>
	<h6>H6-Heading</h6>
				`}
					</code>
				</pre>
			</div>
		</div>
	);
};
