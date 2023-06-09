import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import logo from '../../assets/coffe-delivery-logo.svg';
import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react';

export default function Header() {

  return (
    <HeaderContainer className='container'>
        <NavLink to='/'>
          <img src={logo} alt="CoffeDelivery" />
        </NavLink>
        
        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
    </HeaderContainer>
  )
}

