import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DeliveryAddress = styled.div`
    width: 40rem;
    display: flex;
    background: ${({ theme }) => theme.colors['base-card']};
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    padding: 2.5rem;
    flex-direction: column;
`
export const Payment = styled.div`
    width: 40rem;
    border-radius: 0.5rem;
    padding: 2.5rem;
    background: ${({ theme }) => theme.colors['base-card']};
`
export const PaymentButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
`