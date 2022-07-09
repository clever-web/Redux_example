import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/types';

export default function expenseReducer(state = [], action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return[...state, action.payload];
        case DELETE_EXPENSE:
            return state.filter(expense => expense.id !== action.payload.id);
        default:
            return state;
    }
}