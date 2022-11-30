import React from 'react';

const initialState = {
    score: [{player1: 0, player2: 0}],
    player: 1,
    count: 2
}

const ScoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SCORE':

            if (action.payload.player === Object.keys(state.score[0])[0]) {
                
                state.score[0][action.payload.player] = state.count
                
                return {
                    ...state
                }
            }
            return {
                ...state
            };
        case 'CHANGE_PLAYER': {
            return {
                ...state,
                player: action.payload === 1 ? 1 : 2
            }
        }
        case 'RESET_SCORE':
            console.log('game set');
            return {
                ...state,
                score: [{player1: 0, player2: 0}],
                player: 1
            };
        default:
            return state;
    }
}

export default ScoreReducer;