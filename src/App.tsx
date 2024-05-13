import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";

function App() {

    let [count, setCount] = useState<number>(0)

    // const increaseNumber = (count: number) => {
    //     let newCount = count++;
    //     console.log(newCount)
    //     setCount(newCount)
    //
    // }

    const callBackButtonHandler = () => {
        let newCount = count++;
        console.log(newCount)
        setCount(newCount)
    }

    // const callBackButtonHandler

    return (
        <div className="App">
            <Counter originalValue={0}/>
            <Button name={"inc"} callBack={callBackButtonHandler}/>
            <Button name={"reset"} callBack={callBackButtonHandler}/>
        </div>
    );
}

export default App;
