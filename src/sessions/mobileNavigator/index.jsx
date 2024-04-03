import { useEffect, useState } from 'react';
import { Container, Title, MenuContainer, MenuItem } from './styled'

function MobileNavigator() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showSettings = (event) => {
    event.preventDefault();
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

      <MenuContainer styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} width={150} right >
        <MenuItem id="home" href="/">Home</MenuItem>
        <MenuItem id="about" href="/about">About</MenuItem>
        <MenuItem id="contact" href="/contact">Contact</MenuItem>
        <MenuItem onClick={showSettings} href="">Settings</MenuItem>
      </MenuContainer>
    </>
  );
}

export default MobileNavigator
