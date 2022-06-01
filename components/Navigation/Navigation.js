import { Link as ScrollLink } from 'react-scroll';
import { LinksWrapper, LogoWrapper, NavigationItemsWrapper, NavigationWrapper } from './Navigation.style';
import { content } from '../../content';

const Navigation = () => {
  return (
    <NavigationWrapper>
        <LogoWrapper>
            <h1>{content.nav.logo}</h1>
            <span></span>
        </LogoWrapper>
        <LinksWrapper>

        </LinksWrapper>
    </NavigationWrapper>
  )
}

export default Navigation