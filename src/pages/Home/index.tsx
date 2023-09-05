import CoffeeCard from "./components/OurCoffees";
import Intro from "./components/Intro";
import { HomeContainer } from "./styles";
import { useCart } from "../../hooks/useCart";

export default function Home(){
    const { cartItems } = useCart();
    return (
        <HomeContainer>
            <Intro />
            <CoffeeCard />
        </HomeContainer>
    )
}