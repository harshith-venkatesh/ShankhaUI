import React from "react";

export const Rating = () => {
	return (
		<div>
			<h1> Rating</h1>
			<p>
				Rating components can be used as read-only badge or in reviews section.
				Can be used in reviews section as form too.
			</p>
			<div class="rating-star-container">
				<i class="fas fa-star rating-star-icon"></i>
				<i class="fas fa-star rating-star-icon"></i>
				<i class="fas fa-star rating-star-icon"></i>
				<i class="fas fa-star rating-star-icon"></i>
				<i class="far fa-star rating-star-icon"></i>
			</div>
		</div>
	);
};
