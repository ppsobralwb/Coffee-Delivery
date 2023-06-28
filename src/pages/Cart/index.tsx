import { useTheme } from "styled-components";
import InfoForm from "./components/InfoForm"
import { CartContainer, DeliveryAdress, Payment, PaymentButtonContainer } from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { TitleText } from "../../components/Typography";
import { PaymentButton } from "./components/PaymentButton";
import { SelectedCoffees } from "./components/SelectedCoffees";

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
                    </DeliveryAdress>

                    <Payment>
                        <InfoForm
                            icon={<CurrencyDollar size={22} />}
                            title={'Pagamento'}
                            subtitle={'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
                            color={colors["purple"]}
                        />
                        <PaymentButtonContainer>
                            <PaymentButton
                                icon={<CreditCard size={16} color="purple" />}
                                text="CARTÃO DE CRÉDITO"
                            />
                            <PaymentButton
                                icon={<Bank size={16} color="purple" />}
                                text="CARTÃO DE DÉBITO"
                            />
                            <PaymentButton
                                icon={<Money size={16} color="purple" />}
                                text="DINHEIRO"
                            />

                        </PaymentButtonContainer>

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