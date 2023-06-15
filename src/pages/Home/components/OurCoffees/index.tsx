import { TitleText } from "../../../../components/Typography";
import CoffeeCard from "../CoffeCard";
import { CoffeeList, OurCoffeesContainer } from "./style";

export default function OurCoffes() {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffeeList>
               <CoffeeCard />
            </CoffeeList>
        </OurCoffeesContainer>
    )
}