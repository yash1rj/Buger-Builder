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

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedStateRem = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedStateRem);
};

const setIngredients = (state, action) => {
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
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;