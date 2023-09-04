import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

import { useTheme } from "styled-components";
import InfoForm from "../InfoForm"
import { DeliveryAddress, Payment, PaymentButtonsContainer } from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { TitleText } from "../../../../components/Typography";
import { PaymentButton } from "../PaymentButton";
import { AddressForm } from "../InfoForm/AddressForm";

export function CompleteOrderForm() {
    const { colors } = useTheme();

    return(
        <CompleteOrderFormContainer className="container">
          <TitleText size="xs" color="subtitle">
            Complete seu pedido
          </TitleText>
          
          <FormSectionContainer>
            <DeliveryAddress>
                <InfoForm
                    icon={<MapPinLine size={22} />}
                    title={'Endereço de Entrega'}
                    subtitle={'Informe o endereço onde deseja receber seu pedido'}
                    color={colors["yellow-dark"]}
                />
                <AddressForm />
            </DeliveryAddress>
          </FormSectionContainer>

          <FormSectionContainer>
            <Payment>
              <InfoForm
                icon={<CurrencyDollar size={22} />}
                title={'Pagamento'}
                subtitle={'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
                color={colors["purple"]}
              />
              <PaymentButtonsContainer>
                <PaymentButton
                  icon={<CreditCard size={16} />}
                  text="cartão de crédito"
                />
                <PaymentButton
                  icon={<Bank size={16} />}
                  text="cartão de débito"
                />
                <PaymentButton
                  icon={<Money size={16} />}
                  text="dinheiro"
                />
              </PaymentButtonsContainer>
            </Payment>
          </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}