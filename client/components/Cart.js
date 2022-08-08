import React from "react";
import { connect } from "react-redux";
import { fetchCart, removeProductFromCartThunk,  } from "../store/cart";

//#where does cart come from? single product
//means props.cart & .removeFromCart

export const Cart = ({ cart, removeFromCart }) => {
   const lineItems = cart.lineItem || [];
   console.log('🫐', lineItems);
   // console.log('🍅', lineItems);
   // const product  = location.state || {}

   //#Hook = use location and handing props down from SingleProduuct
   // const location = useLocation();
   // const state = location.state
  

   // console.log('props', this.props)
   // console.log('state', this.state)
   // console.log("linkProd", state);
 
   return ( 
      <div>
         {/* PROF */}
         <ul>
            {lineItems.map((lineItem) => {
               return (
                  <li key={lineItem.id}>
                     {lineItem.product.productName}({lineItem.orderQuantity})
                     <button onClick={removeFromCart(lineItem.product)}>
                        x
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );

};

const mapState = (state) => ({
   cart: state.cart
   //#try no line items unless prof says so
   // lineItems:  state.lineItems,
});

const mapDispatch = (dispatch) => ({
   // getCart: () => dispatch(fetchCart()),
   
   removeFromCart: (product) => dispatch(removeProductFromCartThunk(product)),

   /* unnecssary because of User.getCart() prototype
- getlineItems: () => dispatch(fetchlineItems()),
- getOrder: () => dispatch(fetchOrder()),
  */
});

export default connect(mapState, mapDispatch)(Cart);