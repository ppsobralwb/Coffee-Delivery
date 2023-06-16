import { ShoppingCart } from "phosphor-react";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Title, Type } from "./style";
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
} 

interface CoffeeProps {
    coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeProps){
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            
            <Type>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Type>
            
            <Title>
                {coffee.name}
            </Title>

            <Description>
                {coffee.description}
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
            </CardFooter>   
                
        </CoffeeCardContainer>
    )
}