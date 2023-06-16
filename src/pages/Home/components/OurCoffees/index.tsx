import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import CoffeeCard from "../CoffeCard";
import { CoffeeList, OurCoffeesContainer } from "./style";

export default function OurCoffes() {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}