import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart);

	const removeCart = (id) => {
		//dispatch a remove action
		dispatch(remove(id));
	};

	const cards = products.map((product) => (
		<div key={product.id} className="col-md-12" style={{ marginBottom: "4px" }}>
			<Card className="h-100" style={{ width: "18rem" }}>
				<div className="text-center">
					<Card.Img
						variant="top"
						src={product.image}
						style={{ width: "100px", height: "130px" }}
					/>
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>INR:{product.price}</Card.Text>
					</Card.Body>
					<Card.Footer style={{ backgroundColor: "white" }}>
						<Button
							variant="primary"
							style={{ color: "red" }}
							onClick={() => removeCart(product.id)}
						>
							Remove Item
						</Button>
					</Card.Footer>
				</div>
			</Card>
		</div>
	));

	return (
		<>
			<div className="row">{cards}</div>
		</>
	);
};

export default Cart;
