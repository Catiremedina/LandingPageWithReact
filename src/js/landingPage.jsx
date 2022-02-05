import React from "react";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.js";
import colores from "../../src/img/colores.jpg";
import espacio from "../../src/img/espacio.jpg";
import kick from "../../src/img/kick.jpg";

export const LandingPage = () => {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Card
					img={colores}
					link="www.google.com"
					cardtitle="Primera tarjeta"
				/>
				<Card
					img={espacio}
					link="www.google.co"
					cardtitle="Segunda tarjeta"
				/>
				<Card
					img={kick}
					link="www.google.com.ve"
					cardtitle="Tercera tarjeta"
				/>
			</div>
			<Footer />
		</div>
	);
};
