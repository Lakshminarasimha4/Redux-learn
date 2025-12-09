import { createStore } from "redux";

const initialState = {
    user : {
        username: "ramesh",
        balance: 250000
    },
};
export const addMoney = (amt) => ({
    type: 'addMoney',
    payload: amt,
});
function reducer(state = initialState, action) {
    switch(action.type) {
    case'addMoney':
        return{
            user : {
                balance: state.user.balance + action.payload
            }
        };
        default:
            return state;
}
}
const store = createStore(reducer);
export default store;