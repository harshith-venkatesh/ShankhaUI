import React from "react";

export const Form = () => {
	return (
		<div>
			<div className="flex">
				<label class="form-label form-label-required-field">
					Email address:
				</label>
				<input
					type="text"
					class="form-field"
					placeholder="name@example.com"
					required
				/>
				<div className="error-text">Email should contain @</div>

				<label for="country">Country</label>
				<select id="country" name="country">
					<option value="australia">Australia</option>
					<option value="canada">Canada</option>
					<option value="usa">USA</option>
				</select>
				<input
					type="text"
					class="form-field"
					placeholder="Disabled input"
					disabled
				/>

				<input
					type="text"
					class="form-field"
					placeholder="Disabled read only"
					disabled
					readonly
				/>
			</div>
		</div>
	);
};
