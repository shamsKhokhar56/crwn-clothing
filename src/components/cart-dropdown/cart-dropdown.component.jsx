import './cart-dropdown.styles.scss';

import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

const CartDropDown = () => {
   return (
      <div className='cart-dropdown'>
         <div className='cart-items' />
         <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
   )
}

export default CartDropDown;
