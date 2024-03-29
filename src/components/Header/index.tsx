import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import Logo from '../../assets/coffee-delivery-logo.svg';
import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';

export default function Header() {
  const { cartQuantity } = useCart();
  
  return (
    <HeaderContainer className='container'>
      <NavLink to='/'>
        <img src={Logo} alt="CoffeeDelivery" />
      </NavLink>

      <HeaderButtonsContainer>
        <HeaderButton variant='purple'>
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </HeaderButton>
        <NavLink to="/cart">
          <HeaderButton variant='yellow'>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}

