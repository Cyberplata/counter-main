import { combineReducers, legacy_createStore } from "redux"
import { counterStateReducer } from "../features/counter/model/counterState-reducer"

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
   counterState: counterStateReducer,
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
