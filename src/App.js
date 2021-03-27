import { useState } from "react";
import {
	Alert,
	Avatar,
	Badge,
	Button,
	Card,
	Footer,
	Form,
	Header,
	Home,
	Image,
	List,
	NavBar,
	Rating,
	SideNav,
	Slider,
	Toast,
	Typography
} from "./components";

import "./styles.css";

export default function App() {
	const [route, setRoute] = useState("home");
	return (
		<div className="main-container">
			<div className="border-1">
				<Header setRoute={setRoute} />
			</div>
			<div className="sidenav">
				<SideNav setRoute={setRoute} />
			</div>
			<div className="container">
				{route === "home" && <Home setRoute={setRoute} />}
				{route === "Avatar" && <Avatar />}
				{route === "Alert" && <Alert />}
				{route === "Badge" && <Badge />}
				{route === "Button" && <Button />}
				{route === "Card" && <Card />}
				{route === "Form" && <Form />}
				{route === "Image" && <Image />}
				{route === "List" && <List />}
				{route === "NavBar" && <NavBar setRoute={setRoute} />}
				{route === "Rating" && <Rating />}
				{route === "Typography" && <Typography />}
				{route === "Toast" && <Toast />}
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}
