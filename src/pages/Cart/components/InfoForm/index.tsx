import { ReactNode } from "react";
import { IconContainer, InfoFormContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";

interface InfoFormProps {
    icon: ReactNode;
    title: string | ReactNode;
    subtitle: string | ReactNode;
    color: string;
}

export default function InfoForm({ icon, title, subtitle, color }: InfoFormProps) {
    return (
        <InfoFormContainer>
            <IconContainer color={color}>
                {icon}
            </IconContainer>
            <section>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s" color="text">{subtitle}</RegularText>
            </section>
        </InfoFormContainer>
    )
}