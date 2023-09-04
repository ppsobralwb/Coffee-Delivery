import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`
export const FormSectionContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;
    width: 40rem;
`

export const DeliveryAddress = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    flex-direction: column;
`
export const Payment = styled.div`
    width: 100%;
    border-radius: 0.5rem;
`
export const PaymentButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
`
