import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { InfoFormContainer } from "./styles";

interface InfoFormProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function InfoForm({ title, subtitle, icon }: InfoFormProps) {
  return (
    <InfoFormContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </InfoFormContainer>
  );
}
