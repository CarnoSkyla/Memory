import React from "react";

const initialState = {
    players: [],
    success: false
}

const PlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            let updated = state.players.push({...action.payload})
            return {
                ...state,
                ...updated,
                success: true
            }
        case 'DELETE_PLAYER':
            return state
        default:
            return state;
    }
}

export default PlayerReducer;