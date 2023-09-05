import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { Coffee } from "../Coffee";
import { ConfirmationButton, DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } = useCart();

    return (
        <SelectedCoffeesContainer className="container">
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

          <DetailsContainer>
            {cartItems.map(item => (
                <Coffee key={item.id} coffee={item} />
            ))}
                <section>
                    <RegularText size="s" color="text">Total de itens</RegularText>
                    <RegularText color="text">R$ 29,70</RegularText>
                </section>
                <section>
                    <RegularText size="s" color="text">Entrega</RegularText>
                    <RegularText color="text">R$ 3,50</RegularText>
                </section>
                <section>
                    <RegularText size="l" color="subtitle" weight={'bold'}>Total</RegularText>
                    <RegularText size="l" color="subtitle" weight={'bold'}>R$ 33,20</RegularText>
                </section>
            
            <ConfirmationButton>
                CONFIRMAR PEDIDO
            </ConfirmationButton>
          </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}