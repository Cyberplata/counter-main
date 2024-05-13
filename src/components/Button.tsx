import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({title, callBack, disabled, className}: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        callBack()
    }

    return <button onClick={onClickButtonHandler}
                   disabled={disabled}
                   className={className}
    >{title}</button>
};