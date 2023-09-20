

export const ProtectReducer = (state = "", action) => {
    console.log('reducer',action.type)
    switch (action.type) {
        case "[AUTH] logeado":
            console.log('handleLogin',action.payload)
            return action.payload;

        case '[AUTH] no-logeado':
            return action.payload;

        default:
            return state;
    }
}
