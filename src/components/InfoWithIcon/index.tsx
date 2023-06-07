import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    color: string;
}

export default function InfoWithIcon({ icon, text, color }: InfoWithIconProps) {
    return(
        <InfoWithIconContainer>
            <IconContainer color={color}>
                {icon}
            </IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}