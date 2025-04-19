// src/Utility/reducer.jsx
import { Type } from './action.type';

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const index = state.basket.findIndex(item => item.id === action.item.id);
      if (index >= 0) {
        const updatedBasket = [...state.basket];
        updatedBasket[index] = {
          ...updatedBasket[index],
          amount: updatedBasket[index].amount + 1,
        };
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex(item => item.id === action.id);
      if (index >= 0) {
        const updatedBasket = [...state.basket];
        if (updatedBasket[index].amount > 1) {
          updatedBasket[index] = {
            ...updatedBasket[index],
            amount: updatedBasket[index].amount - 1,
          };
        } else {
          updatedBasket.splice(index, 1);
        }
        return {
          ...state,
          basket: updatedBasket,
        };
      }
      return state;
    }

    default:
      return state;
  }
};


