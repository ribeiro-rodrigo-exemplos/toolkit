import React, { createContext, useContext } from 'react'

import { storeFactory, storeType } from './storeFactory'

type AppContextType = {
    children: React.ReactNode
}

export const AppContext = createContext<storeType>(storeFactory)

export default ({ children }: AppContextType) => (
    <AppContext.Provider value={storeFactory}>
        {children}
    </AppContext.Provider>
)

export const useStore = (): storeType => {
    return useContext<storeType>(AppContext)
} 