import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const CoffeeCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    text-align: center;

    img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    }
`
export const Type = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;

    span {
        background: ${({ theme }) => theme.colors["yellow-light"]};
        color: ${({ theme }) => theme.colors["yellow-dark"]};
        border-radius: 100px;
        font-size: ${({ theme }) => theme.textSizes["components-tag"]};
        padding: 0.25rem 0.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`
export const Title = styled(TitleText).attrs({
    size:'s',
    color: 'base-subtitle',
})`
    margin-bottom: 0.5rem;
    font-weight: 700;
`

export const Description = styled(RegularText).attrs({
    size:'s',
    color: 'base-label',
})`
    margin: 2rem;
`

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        gap: 3px;

        p {
            line-height: 0.75rem;
        }
    }
`

export const AddCartWrapper = styled.div`
    width: 7.5rem;

    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors["purple-dark"]};
        color: ${({ theme }) => theme.colors["base-card"]};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: .4s;

        &:hover {
            background: ${({ theme }) => theme.colors["purple"]};
        }
    }
`
