import React from "react";
import { harshithImage as image } from "../../constants/constants";
export const Badge = () => {
	return (
		<div>
			<h1>Badge</h1>
			<p>
				Badges are being used to display a notification count or status
				information
			</p>
			<hr />
			<h4>Example of Status Badge</h4>
			<p>
				We have 2 types of status badges that can be integrated with Avatars.
				You can show colors to show the online status of user. And to show cart
				or notification count, you can use number badge. Check code below to
				copy the html part as is.
			</p>
			<div className="flex">
				<div class="badge-container pr-2">
					<img src={image} alt="profile" className="avatar" />
					<span class="status-badge status-badge-online"></span>
				</div>
				<div class="badge-container pr-2">
					<img src={image} alt="profile" className="avatar" />
					<span class="status-badge status-badge-busy"></span>
				</div>
				<div class="badge-container">
					<img src={image} alt="profile" className="avatar" />
					<span class="status-badge status-badge-offline"></span>
				</div>
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<div class="badge-container pr-2">
  <img src={image} alt="profile" className="avatar" />
  <span class="status-badge status-badge-online"></span>
</div>
<div class="badge-container pr-2">
  <img src={image} alt="profile" className="avatar" />
  <span class="status-badge status-badge-busy"></span>
</div>
<div class="badge-container">
  <img src={image} alt="profile" className="avatar" />
  <span class="status-badge status-badge-offline"></span>
</div>
          `}
					</code>
					<br />
				</pre>
			</div>
			<div className="flex p-2">
				<div className="badge-icon-container pr-2">
					<i className="fas fa-shopping-cart fa-3x"></i>
					<span class="status-badge status-badge-number">2</span>
				</div>
				<div className="pr-5"></div>
				<div className="badge-icon-container pr-2">
					<i className="far fa-heart fa-3x"></i>
					<span class="status-badge status-badge-number">5</span>
				</div>
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<div className="badge-icon-container pr-2">
  <i className="fas fa-shopping-cart fa-3x"></i>
  <span class="status-badge status-badge-number">2</span>
</div>
<div className="badge-icon-container pr-2">
  <i className="far fa-heart fa-3x"></i>
  <span class="status-badge status-badge-number">5</span>
</div>
          `}
					</code>
					<br />
				</pre>
			</div>
			<hr />
			<div className="flex-column">
				<h4>Example of Text Badge</h4>
				<p>
					We have 2 types of text badges that can be integrated with text. Badge
					with rounded edges and square edges. Font size of badge text is in em.
					It will change as per the parent element's font-size.
				</p>
				<h2>
					Example of Heading with Badge{" "}
					<span class="badge bg-secondary">New</span>
				</h2>
				<h3>
					Example of Heading with Badge{" "}
					<span class="badge bg-secondary">New</span>
				</h3>
				<h4>
					Example of Heading with Badge{" "}
					<span class="badge bg-secondary round-pill-badge">New</span>
				</h4>
				<h5>
					Example of Heading with Badge{" "}
					<span class="badge bg-secondary">New</span>
				</h5>
				<h6>
					Example of Heading with Badge{" "}
					<span class="badge bg-secondary">New</span>
				</h6>
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<h2>Example of Heading with Badge
  <span class="badge bg-secondary">New</span>
</h2>
<h3>Example of Heading with Badge
  <span class="badge bg-secondary">New</span>
</h3>
<h4>Example of Heading with Badge
  <span class="badge bg-secondary round-pill-badge">New</span>
</h4>
<h5>Example of Heading with Badge
  <span class="badge bg-secondary">New</span>
</h5>
<h6>Example of Heading with Badge
  <span class="badge bg-secondary">New</span>
</h6>
          `}
					</code>
					<br />
				</pre>
			</div>
		</div>
	);
};
