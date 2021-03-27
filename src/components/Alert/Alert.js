import React from "react";

export const Alert = () => {
	return (
		<div className="container">
			<h1>Alert</h1>
			<p>
				Alerts are used to attract user's attention for importatnt information
				without interrupting the user's flow.
			</p>
			<hr />
			<h4>Simple Alert</h4>
			<p>
				To use an Alert, add <em>alert</em> <em>alert-color</em> from below
				range as shown in the examples below
			</p>
			<div className="pt-2"></div>
			{/* Alert */}
			<div className="alert alert-blue">
				<i class="fas fa-stopwatch mr-1"></i>
				Timer Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-yellow">
				<i class="fas fa-exclamation-triangle mr-1"></i>
				Warning Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-green">
				<i class="far fa-check-circle mr-1"></i>
				Success Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-red">
				<i class="fas fa-exclamation-circle mr-1"></i>
				Error Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="pt-2"></div>
			<div className="code-display">
				<pre>
					<code>
						{`
<div className="alert alert-blue">
  <i class="fas fa-stopwatch mr-1"></i>
  Timer Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
          `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-yellow">
  <i class="fas fa-exclamation-triangle mr-1"></i>
  Warning Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-green">
  <i class="far fa-check-circle mr-1"></i>
  Success Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-red">
  <i class="fas fa-exclamation-circle mr-1"></i>
  Error Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
				</pre>
			</div>
			<hr />
			<h4>Block Quote</h4>
			<p>
				To use an Block Quote, add <em>quote</em> <em>quote-color</em> from
				below range as shown in the examples below
			</p>
			<div className="pt-2"></div>
			{/* Alert */}
			<div className="quote quote-blue">
				<i class="fas fa-stopwatch mr-1"></i>
				Timer quote{" "}
				<span className="quote-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="quote quote-yellow">
				<i class="fas fa-exclamation-triangle mr-1"></i>
				Warning quote{" "}
				<span className="quote-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="quote quote-green">
				<i class="far fa-check-circle mr-1"></i>
				Success quote{" "}
				<span className="quote-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="quote quote-red">
				<i class="fas fa-exclamation-circle mr-1"></i>
				Error quote{" "}
				<span className="quote-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="pt-2"></div>
			<div className="code-display">
				<pre>
					<code>
						{`
<div className="quote quote-blue">
  <i class="fas fa-stopwatch mr-1"></i>
  Timer quote{" "}
  <span className="quote-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
          `}
					</code>
					<br />
					<code>
						{`
<div className="quote quote-yellow">
  <i class="fas fa-exclamation-triangle mr-1"></i>
  Warning quote{" "}
  <span className="quote-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="quote quote-green">
  <i class="far fa-check-circle mr-1"></i>
  Success quote{" "}
  <span className="quote-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="quote quote-red">
  <i class="fas fa-exclamation-circle mr-1"></i>
  Error quote{" "}
  <span className="quote-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
				</pre>
			</div>
			<hr />
			<h4>Alert Outlined</h4>
			<p>
				To use an Alert, add <em>alert</em> <em>alert-outline-color</em> from
				below range as shown in the examples below
			</p>
			<div className="pt-2"></div>
			{/* Alert */}
			<div className="alert alert-outline-blue">
				<i class="fas fa-stopwatch mr-1"></i>
				Timer Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-outline-yellow">
				<i class="fas fa-exclamation-triangle mr-1"></i>
				Warning Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-outline-green">
				<i class="far fa-check-circle mr-1"></i>
				Success Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="alert alert-outline-red">
				<i class="fas fa-exclamation-circle mr-1"></i>
				Error Alert{" "}
				<span className="alert-close-button">
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
			<div className="pt-2"></div>
			<div className="code-display">
				<pre>
					<code>
						{`
<div className="alert alert-outline-blue">
  <i class="fas fa-stopwatch mr-1"></i>
  Timer Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
          `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-outline-yellow">
  <i class="fas fa-exclamation-triangle mr-1"></i>
  Warning Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-outline-green">
  <i class="far fa-check-circle mr-1"></i>
  Success Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
					<br />
					<code>
						{`
<div className="alert alert-outline-red">
  <i class="fas fa-exclamation-circle mr-1"></i>
  Error Alert{" "}
  <span className="alert-close-button">
    <i className="fas fa-times-circle"></i>
  </span>
</div>
      `}
					</code>
				</pre>
			</div>
		</div>
	);
};
