
const initialState = {
    score: [{player1: 0, player2: 0}],
    count: 2,
    turns: [],
    card: null,
    success: false
}

const ScoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SCORE':

            if (action.payload.player === Object.keys(state.score[0])[0] || action.payload.player === Object.keys(state.score[0])[1]) {
                
                state.score[0][action.payload.player] = state.count++
                return {
                    ...state,
                    
                }
            }
            return {
                ...state
            };
        case 'CHANGE_TURNS':
           state.turns.push(action.payload)
            
           return state;
        
        case 'RESET_STATE':
            return {
                ...state,
                turns: [],
                success: true
            }

        case 'RESET_SCORE':
            return {
                ...state,
                score: [{player1: 0, player2: 0}],
                turns: [],
                player: 1,
                count: 2
            };
        default:
            return state;
    }
}

export default ScoreReducer;