import { React, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer, /*CartDropdownItems,*/ EmptyMessage} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => navigate('/checkout');
  return(
    <CartDropdownContainer>
      {/* <CartDropdownItems> */}
        {
          cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        
      {/* </CartDropdownItems> */}
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
};

export default CartDropdown; 