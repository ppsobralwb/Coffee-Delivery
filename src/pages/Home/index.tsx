import CoffeeCard from "./components/OurCoffees";
import Intro from "./components/Intro";
import { HomeContainer } from "./styles";

export default function Home(){
    return (
        <HomeContainer>
            <Intro />
            <CoffeeCard />
        </HomeContainer>
    )
}