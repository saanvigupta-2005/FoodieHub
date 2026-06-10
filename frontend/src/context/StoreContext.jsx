import React from 'react'
export const StoreContext = React.createContext(null)

export const StoreProvider = (props) => {
    const contextValue = {

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider