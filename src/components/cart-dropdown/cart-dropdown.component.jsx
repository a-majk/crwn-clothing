import { React, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => navigate('/checkout');
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-item'>
        {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
      </div>
      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown; 