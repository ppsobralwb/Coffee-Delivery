import { RegularText, TitleText } from "../../../../components/Typography";
import { Coffee } from "../Coffee";
import { ConfirmationButton, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <Coffee />
            <Coffee />
            <div className="Cost">
                <section>
                    <RegularText size="s" color="text">Total de itens</RegularText>
                    <RegularText size="s" color="text">R$ 29,70</RegularText>
                </section>
                <section>
                    <RegularText size="s" color="text">Entrega</RegularText>
                    <RegularText size="s" color="text">R$ 3,50</RegularText>
                </section>
                <section>
                    <RegularText size="l" color="subtitle" weight={'bold'}>Total</RegularText>
                    <RegularText size="l" color="subtitle" weight={'bold'}>R$ 33,20</RegularText>
                </section>
            </div>
            <ConfirmationButton>
                CONFIRMAR PEDIDO
            </ConfirmationButton>
        </SelectedCoffeesContainer>
    )
}