import { ShoppingCart } from "phosphor-react";
import InfoWithIcon from "../../../../components/InfoWithIcon";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Title, Type } from "./style";
import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";

interface CoffeeCardProps {
    id: number
    img: string
    type: string
    title: string
    description: string
    price: number
    amount: number
}

export function CoffeeCard({ img, type, title, description, price, amount }: CoffeeCardProps){
    const { colors } = useTheme();

    return (
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1687737600&Signature=SD2QRypmmGcwQ6Nn5w5QDfU0HdBwVxxQ5vDaJgjqv7ADoUjH-nh3BxgMrvEOuJebtoqR36D3zclvHb5FyyDP~3LTyE~3e4WwAooc8JCxPcPkY7roU-MMey2~niUPNXPodLT~GIOd~~X2f3XWm40EezStOKaoZt~Avc5Npdg3VdHMXPBPG1RDJGayRnTbhB4GJzd7frsbjJtVJnZpCZUdsl9KjlOpuCxoZ4NHAVP4z1WbsdiJp6qkGqJ2MRCTQZvrXHjLLicPxd3cihHTFjyObSQHx5oN4vSV8ISpRpVzBb7gWjZ0gifjrb1glOpHdwOUIa6zQsX6aFKMBpp8NeRBrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            
            <Type>
                {type}
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
            </Type>
            
            <Title>
                <span>Expresso Tradicional</span>
                {title}
            </Title>

            <Description>
                O tradicional café feito com água quente e grãos moídos
                {description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">9,90</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart size={20} weight="fill" />
                    </button>
                </AddCartWrapper>
                {price}
                {amount}
                
            </CardFooter>   
                
        </CoffeeCardContainer>
    )
}