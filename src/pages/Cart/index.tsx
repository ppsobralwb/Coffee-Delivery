import { CartContainer } from "./styles"
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderForm } from "./components/CompleteOrderForm";

export default function Cart() {
    return (
        <CartContainer className="container">
          <CompleteOrderForm />
          <SelectedCoffees />
        </CartContainer>
    )
}