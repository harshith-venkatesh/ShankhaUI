import React from "react";
import { tanayImage as image } from "../../constants/constants";
export const Card = () => {
	return (
		<div>
			<h1>Card</h1>
			<p>
				Cards are surfaces that display content and actions on a single topic.
			</p>
			<br />
			<p>
				They should be easy to scan for relevant and actionable information.
				Elements, like text and images, should be placed on them in a way that
				clearly indicates hierarchy.
			</p>
			<hr />
			<h4>Simple Card</h4>
			<p>
				Simple Card is the one that contains a title, a descriptive text. To use
				the <em>card Component, card-title, and card-text</em> inside a div with
				class card.
			</p>
			<div className="flex">
				<div class="card-text-container">
					<p>
						"If people knew how hard I worked to get my mastery, it wouldn't
						seem so wonderful at all."
					</p>
					<div className="author-tag">
						<b>- Michelangelo</b>
					</div>
				</div>
			</div>
			<hr />
			<h4>Image Card</h4>
			<p>
				Simple Card is the one that contains a title, a descriptive text. To use
				the <em>card Component,card-image, card-title, and card-text</em> inside
				a div with class card.
			</p>
			<div className="flex">
				<div class="card">
					<img src={image} alt="Avatar" style={{ width: "100%" }} />
					<div>
						<h4>
							<b>Tanay Pratap</b>
						</h4>
						<p>Engineer and Teacher on a Mission</p>
					</div>
				</div>
			</div>
		</div>
	);
};
