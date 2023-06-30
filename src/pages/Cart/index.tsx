import { useTheme } from "styled-components";
import InfoForm from "./components/InfoForm"
import { CartContainer, DeliveryAdress, Payment, PaymentButtonsContainer } from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { TitleText } from "../../components/Typography";
import { PaymentButton } from "./components/PaymentButton";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { AdressForm } from "./components/InfoForm/AdressForm";

export default function Cart() {
    const { colors } = useTheme();

    return (
        <CartContainer className="container">
            <div className="CompleteOrder">
                <TitleText size="s" color="subtitle">
                    Complete seu pedido
                </TitleText>
                <div className="InfosToOrder">
                    <DeliveryAdress>
                        <InfoForm
                            icon={<MapPinLine size={22} />}
                            title={'Endereço de Entrega'}
                            subtitle={'Informe o endereço onde deseja receber seu pedido'}
                            color={colors["yellow-dark"]}
                        />
                        <AdressForm />
                    </DeliveryAdress>

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
                </div>
            </div>

            <div className="SelectedCoffees">
                <TitleText size="s" color="subtitle">
                    Cafés selecionados
                </TitleText>
                <SelectedCoffees />
                
            </div>


        </CartContainer>

    )
}