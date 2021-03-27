import React from "react";

import { harshithImage as image } from "../../constants/constants";
export const Avatar = ({ setRoute }) => {
	return (
		<div className="container flex flex-start flex-column">
			<h1>Avatar</h1>
			<p>
				Avatar can be used to show user's profile picture on profile information
				page, on navigation bar, in blogs grid items.
			</p>
			<hr />
			<h4>Simple Avatar</h4>
			<p>
				To use Imageavatar, add <em>img</em>. and <em>avatar</em> classes
			</p>
			<div className="p-2 ">
				<img src={image} alt="profile" className="avatar" />
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<img src={image} alt="profile" className="avatar" />
          `}
					</code>
					<br />
				</pre>
			</div>
			<hr />
			<h4>Avatar of Different Sizes</h4>
			<p>
				To use Imageavatarof different sizes , add <em>img</em>. and{" "}
				<em>avatar</em> classes tagging different sizes{" "}
				<em>small,medium,large</em>
			</p>
			<div className="flexp-1">
				<img src={image} alt="profile" className="avatar img-extra-small " />
				<img src={image} alt="profile" className="avatar img-small " />
				<img src={image} alt="profile" className="avatar" />
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<img src={image} alt="profile" className="avatar img-small " />
<img src={image} alt="profile" className="avatar" />
<img src={image} alt="profile" className="avatar img-large" />
          `}
					</code>
					<br />
				</pre>
			</div>
			<hr />
			<h4>Text Avatarof Different Sizes</h4>
			<p>
				You can use initial letters of user inavataras well. You need to include
				class <em>avatar-text</em> along with <em>avatar </em>and size class.{" "}
				<em>(e.g. class="avatar avatar-lg-size avatar-text")</em>
			</p>
			<div className="flex  ">
				<div
					alt="profile"
					className="avatar img-extra-small  avatar-text"
					role="img"
				>
					HV
				</div>
				<div
					role="img"
					alt="profile"
					className="avatar img-small  avatar-text text-m"
				>
					HV
				</div>
				<div
					role="img"
					alt="profile"
					className="avatar img-medium  avatar-text text-l"
				>
					HV
				</div>
			</div>
			<div className="code-display">
				<pre>
					<code>
						{`
<img src={image} alt="profile" className="avatar img-small " />
<img src={image} alt="profile" className="avatar" />
<img src={image} alt="profile" className="avatar img-large" />
          `}
					</code>
					<br />
				</pre>
			</div>
		</div>
	);
};
