import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { Coffee } from "../Coffee";
import { ConfirmationButton, DetailsContainer, SelectedCoffeesContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function SelectedCoffees() {
    const { cartItems, cartItemsTotal, cartQuantity } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

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
                    <RegularText color="text">{formattedItemsTotal}</RegularText>
                </section>
                <section>
                    <RegularText size="s" color="text">Entrega</RegularText>
                    <RegularText color="text">{formattedDeliveryPrice}</RegularText>
                </section>
                <section>
                    <RegularText size="l" color="subtitle" weight={'bold'}>Total</RegularText>
                    <RegularText size="l" color="subtitle" weight={'bold'}>{formattedCartTotal}</RegularText>
                </section>
            
            <ConfirmationButton disabled={cartQuantity <= 0} type="submit">
                CONFIRMAR PEDIDO
            </ConfirmationButton>
          </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}