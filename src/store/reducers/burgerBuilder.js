import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 15,
    error: false
};

const INGREDIENTS_PRICES = {
    salad: 10,
    meat: 20,
    cheese: 12,
    paneer: 15
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngs = updateObject(state, updatedIng);
            const updatedStateRem = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedStateRem);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    meat: action.ingredients.meat,
                    cheese: action.ingredients.cheese,
                    paneer: action.ingredients.paneer
                },
                totalPrice: 15,
                error: false
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default reducer;