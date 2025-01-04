import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import { thunk } from "redux-thunk"
import { loadState, saveState } from "../features/counter/api/utils/localstorage-utils"
import { counterNumbersStateReducer } from "../features/counter/model/counterNumbersStateReducer"
import { counterUIStateReducer } from "../features/counter/model/counterUIStateReducer"

const rootReducer = combineReducers({
   numbersState: counterNumbersStateReducer,
   uiState: counterUIStateReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
   saveState({
      numbersState: store.getState().numbersState,
      uiState: store.getState().uiState
   });
});

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

// // Наш объект store
/*
{
    state: {
        counterState: {},
    },
    getState(),
    dispatch(),
    subscribe()
}*/
