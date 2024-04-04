import { useEffect, useState } from 'react';
import { Container, Title, MenuContainer, MenuItem } from './styled'

function MobileNavigator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
      right: '30px',
      top: '18px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <>
      <Container transparent={offset == 0} id='outer-container'>
        <Title>Mangalab</Title>
      </Container>

      <MenuContainer
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        width={150}
        right
        isOpen={isMenuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <MenuItem to={"#home"} smooth onClick={() => closeMenu()}>Home</MenuItem>
        <MenuItem to={"#team"} smooth onClick={() => closeMenu()}>Time</MenuItem>
        <MenuItem to={"#techs"} smooth onClick={() => closeMenu()}>Tecnologias</MenuItem>
        <MenuItem to={"#contact"} smooth onClick={() => closeMenu()}>Contato</MenuItem>
      </MenuContainer>
    </>
  );
}

export default MobileNavigator
