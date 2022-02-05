import React from "react";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-success d-flex justify-content-between">
			<a className="navbar-brand" href="#">
				{"Raul & Benjamin's Landing Page"}
			</a>

			<div>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active text-light" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Our vision
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-light"
							href="https://github.com/ElPiamo">
							{"Raul's GitHub"}
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-light"
							href="https://github.com/Catiremedina">
							{"Benjamin's GitHub"}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
