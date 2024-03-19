import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBarPanel = () => {
	const cartProducts = useSelector((state) => state.cart);
	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container fluid>
					<Navbar.Brand href="#">Reduc Toolkit</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link to="/" as={Link}>
								Product
							</Nav.Link>
						</Nav>
						<Navbar.Toggle />
						<NavbarCollapse />
						<Navbar.Text>
							<Nav.Link to="/cart" as={Link}>
								My Bag {cartProducts.length}
							</Nav.Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBarPanel;
