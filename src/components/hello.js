import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Hello = () => {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.products);

	useEffect(() => {
		// //api
		dispatch(getProducts());
		// fetch(URL)
		// 	.then((data) => data.json())
		// 	.then((result) => getProducts(result));
	}, []);

	if (status === "loading") {
		return <p>Loading...</p>;
	}
	if (status === "error") {
		return <p>Something went wrong.....try again</p>;
	}

	const addToCart = (product) => {
		//dispatch an add action
		dispatch(add(product));
	};

	const cards = products ? (
		products.map((product) => (
			<div
				key={product.id}
				className="col-md-3"
				style={{ marginBottom: "4px" }}
			>
				<Card className="h-100" style={{ width: "18rem" }}>
					<div className="text-center">
						<Card.Img
							variant="top"
							src={product.image}
							style={{ width: "100px", height: "130px" }}
						/>
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>INR: {product.price}</Card.Text>
						</Card.Body>
						<Card.Footer style={{ backgroundColor: "white" }}>
							<Button variant="primary" onClick={() => addToCart(product)}>
								Add to Cart
							</Button>
						</Card.Footer>
					</div>
				</Card>
			</div>
		))
	) : (
		<div>Loading...</div>
	);

	return (
		<>
			<h1>Hello Products</h1>
			<div className="row">{cards}</div>
		</>
	);
};

export default Hello;
