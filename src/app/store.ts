import { combineReducers, legacy_createStore } from "redux"
import { counterNumbersStateReducer } from "../features/counter/model/counterNumbersStateReducer"
import { counterUIStateReducer } from "../features/counter/model/counterUIStateReducer"

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
   numbersState: counterNumbersStateReducer,
   uiState: counterUIStateReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
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
