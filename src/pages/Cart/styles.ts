import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DeliveryAdress = styled.div`
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.colors['base-card']};
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    padding: 2.5rem;
`
export const Payment = styled.div`
    width: 40rem;
    border-radius: 0.5rem;
    padding: 2.5rem;
    background: ${({ theme }) => theme.colors['base-card']};
`
export const PaymentButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`