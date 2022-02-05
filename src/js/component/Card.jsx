import React from "react";
import PropTypes from "prop-types";

//create your first component
const Card = ({ img, cardtitle, link }) => {
	return (
		<div className="container">
			<div className="col">
				<div className="card h-100 card text-center">
					<img
						src={img}
						className="card-img-top"
						alt="../img/forCards.png"></img>
					<div className="card-body">
						<h5 className="card-title">{cardtitle}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<a href={link} className="btn btn-outline-success">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	cardtitle: PropTypes.string,
	link: PropTypes.string,
	img: PropTypes.string
};
