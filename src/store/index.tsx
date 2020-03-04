import { storeType as type } from './storeFactory'
import StoreProvider , { useStore as storeFactory } from './StoreProvider'

export type storeType = type
export const useStore = storeFactory
export default StoreProvider

