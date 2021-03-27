import React, { useState } from "react";

export const Toast = () => {
	const [state, setState] = useState("");
	const showToast = (state) => {
		console.log(state);
		setState(state);
		setTimeout(() => {
			setState("");
		}, 3000);
	};
	return (
		<div className="container">
			<h1>Toast</h1>
			<p>
				This component can be used for toast or snackbar component. Toast is
				mostly used to show feedback message. Snackbar is to used show message
				that need user action
			</p>
			<hr />
			<h4>Example of Toast</h4>
			<p>
				Add toast class to wrapper. Toast has 3 themes, for error, success,
				warning, add <em>toast-success, toast-error, toast-inform</em> class to
				style the theme.
			</p>
			<div className="toast-container">
				<div className="toast-success" onClick={() => showToast("success")}>
					<span>This is success Toast</span>
					<i className="fas fa-times"></i>
				</div>
				<div className="toast-warning" onClick={() => showToast("warning")}>
					<span>This is warning Toast</span>
					<i className="fas fa-times"></i>
				</div>
				<div className="toast-error" onClick={() => showToast("error")}>
					<span>This is error Toast</span>
					<i className="fas fa-times"></i>
				</div>
				<hr />
				<p>The toast can be viewed on click of the above toast message</p>
				{state && (
					<div className={`toast-${state} fade`}>
						<span>This is {state} Toast</span>
						<i className="fas fa-times"></i>
					</div>
				)}
			</div>
		</div>
	);
};
