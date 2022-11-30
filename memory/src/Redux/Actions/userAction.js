export const actions = {
    ADD_PLAYER: "ADD_PLAYER",
    DELETE_PLAYER: "DELETE_PLAYER"
}

export const addPlayer = player => ({
    type: actions.ADD_PLAYER,
    payload: player
})

export const deletePlayer = player => ({
    type: actions.ADD_PLAYER,
    payload: player
})