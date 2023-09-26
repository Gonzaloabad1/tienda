import "./Cart.css";

const Cart = ({cart, totalCart}) => {
  return (
    <section className="cart">
         <img src={cart.image} />
      <h2>🛒</h2>
      <ol>
        {cart.map((item) => (
          <li>
            {item.name} - {item.price} €
          </li>
        ))}
      </ol>
      <h3>Total: {totalCart} €</h3>
    </section>
  );
};

export default Cart