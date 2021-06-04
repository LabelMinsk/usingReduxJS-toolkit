import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const produntInACart = useSelector((state) => state.cart.items);
  //console.log(produntInACart);
  const productListInACart = produntInACart.map((item) => (
    <CartItem
      key={Math.floor(Math.random() * 1e16)}
      item={{
        title: item.title,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{productListInACart}</ul>
    </Card>
  );
};

export default Cart;
