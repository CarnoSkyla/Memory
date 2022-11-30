import React from "react";

const initialState = {
    players: [],
    success: false
}

const PlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return {
                ...state,
                players: action.payload,
                success: true
            }
        case 'DELETE_PLAYER':
            let checkIfPlayerExist = state.user.filter((player) => {
                return player === action.payload
            })
            if (checkIfPlayerExist) {
                console.log(checkIfPlayerExist)
            }
            return {
                ...state
            };
        default:
            return state;
    }
}

export default PlayerReducer;