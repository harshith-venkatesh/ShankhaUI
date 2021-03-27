import React from "react";

export const Image = () => {
	return (
		<div>
			<h1>Responsive Image</h1>
			<p>
				Responsive Image Components are used to dsiplay Images on websites,
				which are screen responsive. They expand upto the width of the container
				they are in.
			</p>
			<hr />
			<h4>Square Image</h4>
			<p> Square Images are the square shaped, with a default dimension</p>
			<div className="border-image">
				<img
					className="border-square-image"
					alt="profile"
					src="https://source.unsplash.com/random/610"
				/>
				<img
					alt="profile"
					className="border-square-image"
					src="https://source.unsplash.com/random/611"
				/>
			</div>
			<hr />
			<h4>Round Image</h4>
			<p>
				{" "}
				Square Images are the round shaped, with a default dimension.You can add
				class <em>img-round</em> to make your image round shaped.
			</p>
			<div className="border-image">
				<img
					alt="profile"
					className="border-round-image"
					src="https://source.unsplash.com/random/610"
				/>
				<img
					alt="profile"
					className="border-round-image"
					src="https://source.unsplash.com/random/611"
				/>
			</div>
		</div>
	);
};
