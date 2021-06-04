import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const produntInACart = useSelector((state) => state.cart);
//console.log(produntInACart);

  const productListInACart = produntInACart.items.map((item) => (
    item.quantity > 0 &&
    <CartItem
      key={item.id}
      item={{
        id: item.id,
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
