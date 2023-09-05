import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors['background']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const HeaderButtonsContainer = styled.div`
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface HeaderButtonProps {
    variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    cursor: inherit;

    span {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      top: calc(-1.25rem / 2);
      right: calc(-1.25rem / 2);
      color: ${({ theme }) => theme.colors['white']};

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem.
      font-weight: 700;
    }

    ${({ variant, theme }) => css`
      background: ${theme.colors[`${variant}-light`]};
      color: ${theme.colors[`${variant}-dark`]};

      span {
        background: ${({theme}) => theme.colors[`${variant}-dark`]}
      }
    `}

    ${({ variant, theme}) => variant === 'purple' && css `
      svg {
        color: ${theme.colors['purple']};
      }  
    `}
`;