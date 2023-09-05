import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CoffeeContainer, RemoveButton, InteractionContainer, CoffeeInfo, Container } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { useTheme } from "styled-components";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function Coffee({ coffee }: CoffeeCartCardProps) {
    const { colors } = useTheme();

    const {changeCartItemQuantity} = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, 'increase');
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, 'decrease');
    }

    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formatMoney(coffeeTotal);

    return (
        <CoffeeContainer>
            <img src={`/coffees/${coffee.photo}`} />
            <Container>
                <CoffeeInfo>
                    <RegularText size="m" color="subtitle">
                        {coffee.name}
                    </RegularText>
                    <RegularText size="m" color="text" weight={'bold-m'}>
                        {formattedPrice}
                    </RegularText>
                </CoffeeInfo>
                <InteractionContainer>
                    <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} />
                    <RemoveButton>
                        <Trash size={16} color={colors.purple}/>
                        REMOVER
                    </RemoveButton>
                </InteractionContainer>
            </Container>      
        </CoffeeContainer>       
    )
}