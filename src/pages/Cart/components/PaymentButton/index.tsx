import { ReactNode } from "react";
import { PaymentButtonContainer } from "./styles";

interface PaymentButtonProps {
    icon: ReactNode;
    text: string;
}

export function PaymentButton({icon, text} : PaymentButtonProps){
    return(
        <PaymentButtonContainer>
            {icon}
            <span>{text}</span>
        </PaymentButtonContainer>
    )
}