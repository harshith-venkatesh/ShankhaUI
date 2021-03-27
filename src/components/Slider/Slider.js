import React from "react";

export const Slider = () => {
	return (
		<div class="slider-container">
			<label class="slider-track" for="range">
				<input
					class="slider"
					type="range"
					name="range"
					id="range"
					min="0"
					max="150"
					value="15"
				/>
			</label>
		</div>
	);
};
