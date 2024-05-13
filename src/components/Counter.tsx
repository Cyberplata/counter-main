import React, {ChangeEvent, useState} from 'react';

type CounterType = {
    // setCount: (value: number) => void
    // originalValue: number
    // callBack: () => void
    originalValue: number
}

export const Counter = (props: CounterType) => {

    // let [count, setCount] = useState(0)

    // const increaseNumber = () => {
    //     let newCount = count++;
    //     setCount(newCount)
    //
    // }


    // const onChangeCounterHandler = (event: ChangeEvent<number>) => {
    //     props.setCount(event.currentTarget)
    // }

    return (
        <div>
            {props.originalValue}
        </div>
    );
};