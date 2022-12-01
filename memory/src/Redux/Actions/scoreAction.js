export const actions = {
    CHANGE_SCORE: 'CHANGE_SCORE',
    RESET_SCORE: 'RESET_SCORE',
    CHANGE_PLAYER: 'CHANGE_PLAYER',
    CHANGE_TURNS: 'CHANGE_TURNS',
    RESET_STATE: 'RESET_STATE'
}

export const changeScore = state => ({
    type: actions.CHANGE_SCORE,
    payload: state
})

export const resetScore = () => ({
    type: actions.RESET_SCORE
})

export const changePlayer = player => ({
    type: actions.CHANGE_PLAYER,
    payload: player
})

export const changeTurns = turn => ({
    type: actions.CHANGE_TURNS,
    payload: turn
})

export const resetState = () => ({
    type: actions.RESET_STATE
})