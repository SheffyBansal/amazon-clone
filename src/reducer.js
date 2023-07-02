export const initialState={
    basket:[]
}

export const getBasketTotal=(basket)=>{
  return basket?.reduce((total,item)=>total+item.price,0)
}

export default function reducer(state,action) {
     switch(action.action) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //LOGIC
            let newBasket =[...state.basket];
            const index= state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            if(index>=0) {
                newBasket.splice(index,1);
            }
            return{...state,basket: newBasket}
        default:
            return state;        
     }
} 