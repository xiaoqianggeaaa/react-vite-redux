import React, { useReducer } from "react"
const initialState = { theme: 'light' };

function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
}
export const Context = React.createContext({})
export const ContextComponent = props => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return <Context.Provider value={{state, dispatch}}>{props.children}</Context.Provider>

}