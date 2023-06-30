import { InputStyleContainer } from "./style";
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    erro?: string;
    rightText?: string;
}

export function Input({ ...props }: InputProps) {
    return(
        <InputStyleContainer {...props} />
    )
}