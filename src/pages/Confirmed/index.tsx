import { ConfirmedContainer, InfosContainer } from "./styles";

import Illustration from '../../assets/Illustration.svg'
import { RegularText, TitleText } from "../../components/Typography";
import InfoWithIcon from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export default function Confirmed() {
    const { colors } = useTheme();
    
    return (
        <ConfirmedContainer className="container">
          <div>
            <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
            <RegularText size="l" color="subtitle"> Agora é só aguardar que logo o café chegará até você</RegularText>
          </div>

          <section>
            <InfosContainer>
              <InfoWithIcon 
                icon={<MapPin size={20} weight="fill" />}
                text={
                  <RegularText>
                    Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
                    <br />
                    Farrapos - Porto Alegre, RS
                  </RegularText>}
                color={colors["purple"]}
              />
              <InfoWithIcon 
                icon={<Clock size={20} weight="fill" />}
                text={
                  <RegularText>
                    Previsão de entrega
                    <br />
                    <strong>20 min - 30 min</strong>
                  </RegularText>}
                color={colors["yellow"]}
              />
              <InfoWithIcon 
                icon={<CurrencyDollar size={20} weight="fill" />}
                text={
                  <RegularText>
                    Pagamento na entrega
                    <br />
                    <strong>Cartão de crédito</strong>
                  </RegularText>}
                color={colors["yellow-dark"]}
              />
            </InfosContainer>
            <img src={Illustration}/>
          </section>
        </ConfirmedContainer>

    )
}