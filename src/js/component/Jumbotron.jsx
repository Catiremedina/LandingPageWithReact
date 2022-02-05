import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Wellcome to Our Landing page!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Architecto, aperiam vel? Corporis
					architecto mollitia sint assumenda ex, in nobis recusandae
					minima dolorem nemo soluta accusamus molestias repellat id
					sequi veniam.
				</p>
				<p className="lead">
					<a
						className="btn btn-outline-success btn-lg"
						href="#"
						role="button">
						Go for it
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
