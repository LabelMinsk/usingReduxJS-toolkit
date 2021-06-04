import {useSelector, useDispatch} from "react-redux"
import { cartActions } from "../../store/cart-slice";
import classes from './CartItem.module.css';


const CartItem = (props) => {
  const dispatch = useDispatch()
  const productItems = useSelector(state=>state.cart.items)

  const {id, title, quantity, total, price } = props.item;

  const removeItemHandler = ()=>{

    const itemCart = productItems.find(item=>item.id === id)

    if(itemCart.id === id && itemCart.totalPrice > 0){
     return dispatch(cartActions.removeItemCart(id))
    }
  //  console.log(itemCart);
    
    return
  }

  const addItemHandler = ()=>{
    dispatch(cartActions.addItemCart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
