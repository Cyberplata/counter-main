import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({title, callBack, disabled, className}: ButtonPropsType) => {

    return <button onClick={callBack}
                   disabled={disabled}
                   className={`button ${className ? className : ''}`}
    >{title}</button>
};